import React from 'react';
import { Leaf, Fish, Bone as Drone, Shield, Warehouse, Eye, Flame, Tractor, Package, ArrowRight, CheckCircle } from 'lucide-react';

const Projects = () => {
  const mainProjects = [
    {
      title: 'Smart Greenhouse Monitoring Solution',
      description: 'Optimize your greenhouse operations with our advanced monitoring and control system. Ensure ideal growing conditions and improve crop yield through precision agriculture technology.',
      icon: Leaf,
      gradient: 'from-green-500 to-emerald-600',
      features: [
        'Real-time monitoring of humidity, soil moisture, and temperature',
        'Automated control of fans and water sprinklers',
        'Web-based dashboard for data visualization',
        'Remote control capabilities via mobile or web',
        'Advanced analytics for improved crop growth'
      ]
    },
    {
      title: 'Shrimp Farm Monitoring System',
      description: 'Maximize the efficiency and yield of your shrimp farming operations with our comprehensive monitoring solution. Monitor critical water parameters and control equipment from anywhere.',
      icon: Fish,
      gradient: 'from-blue-500 to-cyan-600',
      features: [
        'Monitor temperature, TDS, dissolved oxygen, and pH levels',
        'Manual and automatic aerator fan control',
        'Real-time data visualization on web dashboard',
        'Alert system for parameter threshold violations',
        'Historical data analysis for optimizing farm conditions'
      ]
    }
  ];

  const droneServices = [
    {
      title: 'Perimeter Security',
      description: '24/7 automated surveillance for facility perimeters',
      icon: Shield,
      features: [
        'Continuous monitoring of facility boundaries',
        'Automatic detection of unauthorized entry',
        'Real-time alerts to security personnel',
        'Integration with existing security systems',
        'Reduced security personnel costs'
      ]
    },
    {
      title: 'Warehouse Surveillance',
      description: 'Real-time monitoring of warehouse operations',
      icon: Warehouse,
      features: [
        'Indoor navigation capabilities',
        'Monitoring of high-value inventory areas',
        'Employee safety oversight',
        'Identification of operational bottlenecks',
        'Theft prevention and detection'
      ]
    },
    {
      title: 'Intruder Detection',
      description: 'AI-powered threat detection system',
      icon: Eye,
      features: [
        'Advanced facial recognition',
        'Behavior analysis algorithms',
        'Instant alert system',
        'Integration with law enforcement systems',
        'Low false positive rate'
      ]
    },
    {
      title: 'Firefighting Operations',
      description: 'Thermal imaging and fire response support',
      icon: Flame,
      features: [
        'Real-time fire detection and mapping',
        'Thermal hotspot identification',
        'Water and retardant deployment',
        'Search and rescue assistance',
        'Smoke penetration capabilities'
      ]
    },
    {
      title: 'Agricultural Monitoring',
      description: 'Advanced crop monitoring and precision agriculture solutions',
      icon: Tractor,
      features: [
        'Multispectral imaging for crop health',
        'Irrigation optimization',
        'Pest and disease detection',
        'Yield prediction analytics',
        'Soil quality assessment'
      ]
    },
    {
      title: 'Inventory Management',
      description: 'Automated inventory tracking and warehouse optimization',
      icon: Package,
      features: [
        'Barcode and RFID scanning',
        'Automated stock counting',
        'Space utilization analysis',
        'Inventory location mapping',
        'Integration with inventory management systems'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of engineering solutions designed to transform industries 
            through intelligent automation and precision monitoring.
          </p>
        </div>

        {/* Main Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Solutions</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${project.gradient} p-6`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                      <project.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <ul className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drone Services */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Autonomous AI-Powered <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Drones</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              High-performance, reliable, and safe autonomous drones with time-efficient operations, 
              precision control, and customizable modular design.
            </p>
            
            {/* Drone Features */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-12">
              {[
                'High Performance',
                'Reliable & Safe',
                'Time-Efficient',
                'Precision Control',
                'Customizable'
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                  <div className="text-sm font-semibold text-gray-900">{feature}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {droneServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors group-hover:translate-x-1 transform transition-transform">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;