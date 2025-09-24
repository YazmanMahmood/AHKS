import React from 'react';
import { useSiteSettings, useTeamMembers, useProjects, useDroneServices } from '../../hooks/useSupabaseData';
import { Users, FolderOpen, Bone as Drone, BarChart3 } from 'lucide-react';
import LoadingSpinner from '../../components/LoadingSpinner';

const AdminDashboard = () => {
  const { settings, loading: settingsLoading } = useSiteSettings();
  const { teamMembers, loading: teamLoading } = useTeamMembers();
  const { projects, loading: projectsLoading } = useProjects();
  const { droneServices, loading: dronesLoading } = useDroneServices();

  const loading = settingsLoading || teamLoading || projectsLoading || dronesLoading;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const stats = [
    {
      name: 'Team Members',
      value: teamMembers.length,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      name: 'Active Projects',
      value: projects.length,
      icon: FolderOpen,
      color: 'bg-green-500',
    },
    {
      name: 'Drone Services',
      value: droneServices.length,
      icon: Drone,
      color: 'bg-purple-500',
    },
    {
      name: 'Projects Completed',
      value: settings.projects_completed || '0',
      icon: BarChart3,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Overview of your website content and statistics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className={`p-3 rounded-md ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {stat.value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <button className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg p-4 text-left transition-colors">
              <div className="text-emerald-600 font-medium">Add Team Member</div>
              <div className="text-sm text-emerald-500">Add a new team member to your website</div>
            </button>
            <button className="bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-4 text-left transition-colors">
              <div className="text-blue-600 font-medium">Create Project</div>
              <div className="text-sm text-blue-500">Add a new project or solution</div>
            </button>
            <button className="bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg p-4 text-left transition-colors">
              <div className="text-purple-600 font-medium">Update Settings</div>
              <div className="text-sm text-purple-500">Modify site settings and statistics</div>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Site Overview
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-sm text-gray-600">Company Name</span>
              <span className="text-sm font-medium text-gray-900">{settings.company_name}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-sm text-gray-600">Projects Completed</span>
              <span className="text-sm font-medium text-gray-900">{settings.projects_completed}+</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-sm text-gray-600">Drones Deployed</span>
              <span className="text-sm font-medium text-gray-900">{settings.drones_deployed}+</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-gray-600">Monitoring Systems</span>
              <span className="text-sm font-medium text-gray-900">{settings.monitoring_systems}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;