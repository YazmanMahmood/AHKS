import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Cpu, Shield, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-light">AHKS Engineering</h2>
            <p className="text-light leading-relaxed text-sm">
              Pioneering the future with AI-powered automation, precision monitoring, 
              and advanced drone technology to achieve industrial excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Team', path: '/team' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="flex items-center space-x-2 text-light hover:text-gray-300 transition-colors"
                  >
                    <span>•</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services with Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light">Our Services</h3>
            <ul className="space-y-2 text-sm text-light">
              <li className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-light" />
                <span>Smart Greenhouse Monitoring</span>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-light" />
                <span>Shrimp Farm Systems</span>
              </li>
              <li className="flex items-center space-x-2">
                <Cpu className="h-4 w-4 text-light" />
                <span>Autonomous Drones</span>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-light" />
                <span>AI-Powered Security</span>
              </li>
              <li className="flex items-center space-x-2">
                <Cpu className="h-4 w-4 text-light" />
                <span>IoT Integration</span>
              </li>
              <li className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-light" />
                <span>Custom Engineering</span>
              </li>
            </ul>
          </div>

          {/* Contact Info with Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-light" />
                <span>ahksengineering@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-light" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-light" />
                <span>Johar Town, Lahore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-main mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-light text-sm">
              © {currentYear} AHKS Engineering Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
