import React from 'react';
import { ArrowRight, Zap, Shield, Target } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced
              <span className="block bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
                Engineering
              </span>
              Solutions
            </h1>
          </div>
          
          <div className="animate-fade-in-up delay-300">
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future with AI-powered automation, precision monitoring systems, 
              and cutting-edge drone technology for industrial excellence.
            </p>
          </div>

          <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToProjects}
              className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Get In Touch
            </button>
          </div>

          {/* Feature Icons */}
          <div className="animate-fade-in-up delay-700 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Zap className="h-8 w-8 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
              <p className="text-blue-100">Advanced artificial intelligence for optimal performance</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Shield className="h-8 w-8 text-teal-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Reliable</h3>
              <p className="text-blue-100">Enterprise-grade reliability and safety systems</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Target className="h-8 w-8 text-orange-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Precision</h3>
              <p className="text-blue-100">Centimeter-level accuracy for critical applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;