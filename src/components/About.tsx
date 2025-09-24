import React from 'react';
import { Cpu, Database, Bone as Drone, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Cpu },
    { number: '24/7', label: 'Monitoring Systems', icon: Database },
    { number: '100+', label: 'Drones Deployed', icon: Drone },
    { number: '15+', label: 'Team Members', icon: Users },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">AHKS Engineering</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are pioneers in advanced engineering solutions, specializing in AI-powered automation, 
            precision monitoring systems, and cutting-edge drone technology that transforms industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              At AHKS Engineering, we bridge the gap between traditional engineering and the future of automation. 
              Our team of experts combines decades of engineering experience with cutting-edge AI and IoT technologies 
              to deliver solutions that are not just innovative, but transformative.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From precision agriculture monitoring to autonomous security systems, we engineer solutions that 
              increase efficiency, reduce costs, and create sustainable value for our clients across various industries.
            </p>
            <div className="flex space-x-4">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded"></div>
              <div className="h-1 w-8 bg-gradient-to-r from-teal-600 to-orange-500 rounded"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="p-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg w-fit mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full w-fit mx-auto mb-4">
                <Cpu className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">AI & Machine Learning</h4>
              <p className="text-gray-600">Advanced algorithms for predictive analytics and autonomous decision-making</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-teal-100 to-teal-200 rounded-full w-fit mx-auto mb-4">
                <Database className="h-8 w-8 text-teal-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">IoT Integration</h4>
              <p className="text-gray-600">Seamless connectivity and real-time monitoring across all systems</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full w-fit mx-auto mb-4">
                <Drone className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Autonomous Systems</h4>
              <p className="text-gray-600">Self-operating solutions that adapt and optimize performance continuously</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;