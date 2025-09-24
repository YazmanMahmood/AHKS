import React, { useState, useEffect } from 'react';
import { supabase, isSupabaseEnabled } from '../../lib/supabase';
import { useSiteSettings } from '../../hooks/useSupabaseData';
import { Save, RefreshCw } from 'lucide-react';
import LoadingSpinner from '../../components/LoadingSpinner';

const AdminSettings = () => {
  const { settings, loading } = useSiteSettings();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    setFormData(settings);
  }, [settings]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      if (!isSupabaseEnabled) {
        setMessage({ type: 'error', text: 'Supabase is not configured.' });
        return;
      }
      // Update each setting
      const updates = Object.entries(formData).map(([key, value]) =>
        supabase
          .from('site_settings')
          .update({ value, updated_at: new Date().toISOString() })
          .eq('key', key)
      );

      await Promise.all(updates);

      setMessage({ type: 'success', text: 'Settings updated successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to update settings. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const settingsConfig = [
    { key: 'company_name', label: 'Company Name', type: 'text' },
    { key: 'hero_title', label: 'Hero Title', type: 'text' },
    { key: 'hero_subtitle', label: 'Hero Subtitle', type: 'textarea' },
    { key: 'projects_completed', label: 'Projects Completed', type: 'number' },
    { key: 'monitoring_systems', label: 'Monitoring Systems', type: 'text' },
    { key: 'drones_deployed', label: 'Drones Deployed', type: 'number' },
    { key: 'team_members_count', label: 'Team Members Count', type: 'number' },
    { key: 'office_hours', label: 'Office Hours', type: 'textarea' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Site Settings</h1>
        <p className="text-gray-600">Manage your website's global settings and statistics</p>
      </div>

      {message && (
        <div className={`p-4 rounded-md ${
          message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-6">
            {settingsConfig.map((setting) => (
              <div key={setting.key}>
                <label htmlFor={setting.key} className="block text-sm font-medium text-gray-700 mb-2">
                  {setting.label}
                </label>
                {setting.type === 'textarea' ? (
                  <textarea
                    id={setting.key}
                    rows={4}
                    value={formData[setting.key] || ''}
                    onChange={(e) => handleChange(setting.key, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  />
                ) : (
                  <input
                    type={setting.type}
                    id={setting.key}
                    value={formData[setting.key] || ''}
                    onChange={(e) => handleChange(setting.key, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 rounded-b-lg">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
          >
            {saving ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Settings
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminSettings;
