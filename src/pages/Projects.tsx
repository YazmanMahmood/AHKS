import React, { useState, useEffect } from 'react';
import { 
  Leaf, Fish, Shield, Warehouse, Eye, Flame, Tractor, Package, ArrowRight, CheckCircle, Camera,
  Zap, Battery, Truck, Droplets, Radio, Satellite, Sun, Factory, Building, Cpu, Globe, Plane
} from 'lucide-react';

// Import custom icons
import energySystemIcon from '../images/icons/energy-system.png';
import forkLifterIcon from '../images/icons/fork-lifter.png';
import solarEnergyIcon from '../images/icons/solar-energy.png';
import aicctvIcon from '../images/icons/aicctv.png';
import electricBikeIcon from '../images/icons/electric-bike.png';
import aidrone from '../images/icons/ai-drone.png';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', name: 'All Solutions', icon: Globe },
    { id: 'automation', name: 'Smart Automation', icon: Cpu },
    { id: 'agriculture', name: 'Agriculture Tech', icon: Tractor },
    { id: 'security', name: 'Security & Surveillance', icon: Shield },
    { id: 'energy', name: 'Energy Solutions', icon: Zap },
    { id: 'communication', name: 'Communication Systems', icon: Satellite }
  ];

  const projects = [
    // Smart Automation Category
    {
      title: 'Smart Greenhouse Monitoring System',
      description: 'Advanced IoT platform for precision greenhouse management with automated environmental controls and intelligent monitoring.',
      icon: Leaf,
      category: 'agriculture',
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      features: [
        'Humidity Sensors: Continuous atmospheric moisture tracking',
        'Soil Moisture Detection: Root-zone hydration optimization',
        'Temperature Control: Multi-zone climate management',
        'Data Logging: Comprehensive environmental history',
        'Fan Management: Intelligent ventilation control',
        'Water Sprinkler System: Precision irrigation delivery',
        'Climate Regulation: Automated environmental optimization',
        'Alert Systems: Real-time notification management'
      ],
      applications: [
        'Real-time monitoring dashboard',
        'Remote control capabilities', 
        'Alert and notification system',
        'Data visualization and reporting'
      ]
    },
    {
      title: 'Aquaculture Monitoring System',
      description: 'Comprehensive water quality monitoring solution for fish farms and aquaculture operations with automated alerts and controls.',
      icon: Fish,
      category: 'agriculture',
      gradient: 'from-blue-500 via-cyan-500 to-teal-600',
      features: [
        'Temperature Monitoring: Continuous water temperature tracking',
        'Dissolved Oxygen Sensors: Critical oxygen level monitoring',
        'TDS Measurement: Total dissolved solids analysis',
        'pH Level Monitoring: Water acidity/alkalinity balance',
        'Water Quality Analytics: Multi-parameter assessment',
        'Automated Aeration Control: Oxygen level optimization',
        'Real-time Alert System: Critical parameter notifications',
        'Historical Data Analysis: Trend monitoring and insights'
      ],
      applications: [
        'Real-time water quality dashboard',
        'Mobile alerts for critical parameters',
        'Remote monitoring capabilities',
        'Data logging and trend analysis'
      ]
    },
    {
      title: 'Power Management System',
      description: 'Intelligent power distribution and monitoring system for industrial and residential applications with energy optimization.',
      icon: energySystemIcon,
      category: 'automation',
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      features: [
        'Real-time power consumption monitoring',
        'Load balancing and demand management',
        'Energy efficiency optimization algorithms',
        'Remote monitoring and control interface',
        'Integration with renewable energy sources',
        'Automated backup power switching'
      ]
    },
    {
      title: 'Fork Lifter Security System',
      description: 'Advanced safety and security system for industrial vehicles with operator monitoring and collision prevention.',
      icon: forkLifterIcon,
      category: 'automation',
      gradient: 'from-orange-500 to-red-600',
      features: [
        'Operator authentication and access control',
        'Real-time vehicle tracking and monitoring',
        'Collision detection and prevention systems',
        'Load weight monitoring and alerts',
        'Maintenance scheduling and diagnostics',
        'Integration with warehouse management systems'
      ]
    },

    // Agriculture Tech Category
    {
      title: 'Drip Irrigation System',
      description: 'Precision irrigation system with smart sensors and automated water management for optimal crop growth.',
      icon: Droplets,
      category: 'agriculture',
      gradient: 'from-blue-400 to-cyan-600',
      features: [
        'Soil moisture sensor integration',
        'Weather-based irrigation scheduling',
        'Water flow monitoring and control',
        'Fertilizer injection system compatibility',
        'Mobile app for remote management',
        'Water usage analytics and reporting'
      ]
    },
    {
      title: 'Solar Panel Cleaning Bots',
      description: 'Autonomous cleaning robots for solar installations with performance optimization and maintenance scheduling.',
      icon: solarEnergyIcon,
      category: 'agriculture',
      gradient: 'from-yellow-400 to-emerald-500',
      features: [
        'Autonomous cleaning cycles with minimal water usage',
        'Performance tracking and efficiency monitoring',
        'Weather-adaptive scheduling algorithms',
        'Remote monitoring and control interface',
        'Maintenance alerts and diagnostics',
        'Integration with solar monitoring systems'
      ]
    },

    // Security & Surveillance Category
    {
      title: 'Autonomous AI-Powered Drones',
      description: 'Advanced autonomous drones for surveillance, monitoring, and security applications with AI-powered analytics.',
      icon: aidrone,
      category: 'security',
      gradient: 'from-emerald-600 to-teal-600',
      features: [
        '24/7 autonomous patrol missions',
        'AI-powered threat detection and analysis',
        'Auto-landing and battery swapping systems',
        '30km operational range with 45min flight time',
        '2kg payload capacity for specialized equipment',
        'Secure encrypted video transmission',
        'Real-time alerts and emergency response',
        'Modular design for custom applications'
      ]
    },
    {
      title: 'AI-Based CCTV Monitoring',
      description: 'Intelligent surveillance system with computer vision, facial recognition, and automated threat detection.',
      icon: aicctvIcon,
      category: 'security',
      gradient: 'from-blue-500 to-indigo-600',
      features: [
        'Advanced facial recognition and person tracking',
        'Vehicle identification and license plate recognition',
        'Behavioral analysis and anomaly detection',
        'Real-time alerts and incident reporting',
        'Integration with access control systems',
        'Historical data analysis and reporting'
      ]
    },
    {
      title: 'RFID Applications',
      description: 'Comprehensive RFID solutions for asset tracking, inventory management, and access control systems.',
      icon: Radio,
      category: 'security',
      gradient: 'from-purple-500 to-pink-600',
      features: [
        'Asset tracking and inventory management',
        'Personnel access control and attendance',
        'Vehicle and equipment identification',
        'Supply chain visibility and traceability',
        'Integration with existing management systems',
        'Custom RFID tag and reader solutions'
      ]
    },

    // Energy Solutions Category
    {
      title: 'E-Bike Systems',
      description: 'Smart electric bicycle systems with IoT connectivity, battery management, and performance monitoring.',
      icon: electricBikeIcon,
      category: 'energy',
      gradient: 'from-green-400 to-blue-500',
      features: [
        'Advanced battery management systems',
        'IoT connectivity for tracking and diagnostics',
        'Mobile app for performance monitoring',
        'Anti-theft GPS tracking system',
        'Smart charging optimization',
        'Predictive maintenance alerts'
      ]
    },

    // Communication Systems Category
    {
      title: 'Satellite Design & Communication',
      description: 'Custom satellite systems and ground station solutions for communication, monitoring, and data transmission.',
      icon: Satellite,
      category: 'communication',
      gradient: 'from-indigo-500 to-purple-600',
      features: [
        'Custom satellite design and development',
        'Ground station setup and configuration',
        'Satellite communication protocols',
        'Data transmission and telemetry systems',
        'Orbital mechanics and mission planning',
        'Integration with terrestrial networks'
      ]
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        /* Hidden state for animations - but visible by default */
        .animate-on-scroll {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        /* Initial hidden state before animation */
        .animate-on-scroll:not(.animate-fade-in-up) {
          opacity: 0;
          transform: translateY(30px);
        }
      `}</style>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-[#237bff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 sm:mb-6 px-2 font-normal">
              Our <span className="text-white font-normal">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto px-4 font-normal">
              Comprehensive engineering solutions across automation, agriculture, security, energy, and communication systems.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 animate-on-scroll">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-normal transition-all duration-300 border ${
                  activeCategory === category.id
                    ? 'bg-white text-[#237bff] shadow-lg transform scale-105 border-white'
                    : 'bg-[#237bff]/10 text-white hover:bg-white hover:text-[#237bff] border-white/20'
                }`}
              >
                <category.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
            <h2 className="text-2xl sm:text-3xl text-black mb-4 font-normal">
              {activeCategory === 'all' ? 'All Solutions' : 
               categories.find(cat => cat.id === activeCategory)?.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-[#f0fdff] border border-[#237bff]/10 rounded-2xl shadow-lg transition-all duration-300 overflow-hidden group animate-on-scroll"
              >
                <div className="bg-[#237bff] p-4 sm:p-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 bg-white rounded-lg">
                      {typeof project.icon === 'string' ? (
                        <img src={project.icon} alt={project.title} className="h-6 w-6 sm:h-8 sm:w-8 object-contain" />
                      ) : (
                        <project.icon className="h-6 w-6 sm:h-8 sm:w-8 text-[#237bff]" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl text-white font-normal">{project.title}</h3>
                      <span className="text-xs sm:text-sm text-white/70 capitalize">
                        {categories.find(cat => cat.id === project.category)?.name}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-black mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base font-normal">
                    {project.description}
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#237bff] mt-0.5 flex-shrink-0" />
                        <span className="text-black text-sm sm:text-base font-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      

      {/* CTA Section */}
      
    </div>
  );
};

export default Projects;