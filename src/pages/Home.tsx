import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Target, CheckCircle, Fish, Award, Users, Clock, Star, Eye } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import binqutabLogo from '../images/binqutab.png';
import bsLogo from '../images/bs.png';
import citipharmaLogo from '../images/citipharma.png';
import ecoLogo from '../images/eco.avif';
import pitbLogo from '../images/pitb.jpg';
import skypowerLogo from '../images/skypower.jpg';
import tevtaLogo from '../images/tevta.jpg';

// Import new custom icons
import visionIcon from '../images/icons/vision.png';
import edgeComputingIcon from '../images/icons/edge-computing.png';
import contractIcon from '../images/icons/contract.png';
import rdIcon from '../images/icons/RD.png';
import energyIcon from '../images/icons/energy.png';
import aiIcon from '../images/icons/AI.png';
import iotIcon from '../images/icons/iot.png';
// Import the custom drone icon - Ensure this path is correct
import droneIcon from '../images/icons/ai-drone.png';

// Import team image
import teamImage from '../images/teamm.png';

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedWordPart, setTypedWordPart] = useState(''); // Only the typed part of the changing word

  const words = ['Advanced', 'Innovative', 'Intelligent', 'Cutting-Edge'];
  const staticText = 'Engineering Solutions'; // Static text is always shown

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentCharIndex < currentWord.length) {
          setTypedWordPart(currentWord.slice(0, currentCharIndex + 1));
          setCurrentCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000); // Pause at the end
        }
      } else {
        if (currentCharIndex > 0) {
          setTypedWordPart(currentWord.slice(0, currentCharIndex - 1));
          setCurrentCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex(prev => (prev + 1) % words.length);
          setTypedWordPart(''); // Reset for the next word
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timer);
  }, [currentCharIndex, isDeleting, currentWordIndex, words]);

  // Intersection Observer for animations
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

  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence for optimal performance and automation'
    },
    {
      icon: Shield,
      title: 'Enterprise Reliability',
      description: 'Military-grade reliability and safety systems for critical operations'
    },
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Centimeter-level accuracy for the most demanding applications'
    }
  ];

  const stats = [
    { icon: Award, number: 10, label: 'Projects Completed', suffix: '+' },
    { icon: Users, number: 8, label: 'Happy Clients', suffix: '+' },
    { icon: Star, number: 10, label: 'Years Experience', suffix: '+' },
    { icon: Clock, number: 24, label: 'Support Hours', suffix: '/7' }
  ];

  const whyChooseUs = [
    'Industry-leading expertise in AI and automation',
    '24/7 monitoring and support systems',
    'Proven track record with 10+ successful deployments',
    'Custom solutions tailored to your specific needs',
    'Cutting-edge technology with future-proof design',
    'Comprehensive training and ongoing support'
  ];

  // Updated solution categories with custom icons including the drone icon
  const solutionCategories = [
    { icon: iotIcon, title: 'IoT Based Solutions', id: 'iot' },
    { icon: aiIcon, title: 'AI Based Solutions' },
    { icon: energyIcon, title: 'Energy & Sustainability', id: 'energy' },
    { icon: rdIcon, title: 'Custom R&D Solutions' },
    { icon: contractIcon, title: 'Contracting Services' },
    { icon: edgeComputingIcon, title: 'Edge Computing Solutions' },
    { icon: visionIcon, title: 'Computer Vision & ML Solutions' },
    { icon: droneIcon, title: 'AI-Powered Drones' } // Use the imported drone icon
  ];

  const trustedLogos = [
    { src: binqutabLogo, alt: 'Bin Qutab' },
    { src: bsLogo, alt: 'BS' },
    { src: citipharmaLogo, alt: 'Citipharma' },
    { src: ecoLogo, alt: 'Eco' },
    { src: pitbLogo, alt: 'PITB' },
    { src: skypowerLogo, alt: 'Sky Power' },
    { src: tevtaLogo, alt: 'TEVTA' }
  ];

  return (
    <div className="min-h-screen">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes rotate-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-rotate-logos {
          animation: rotate-logos 20s linear infinite;
        }

        .logos-container {
          width: 200%;
        }

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

        .gradient-text {
          background: linear-gradient(90deg, #60a5fa, #3b82f6, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .line-connector::before {
          content: '';
          position: absolute;
          width: 2px;
          height: 40px;
          background: #237bff;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
        }

        /* Custom lines for IoT and Energy solutions */
        .line-connector-iot::before,
        .line-connector-energy::before {
          content: '';
          position: absolute;
          background: #237bff;
          z-index: -1;
        }

        .line-connector-iot::before {
          width: 2px;
          height: 60px;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
        }

        .line-connector-energy::before {
          width: 2px;
          height: 60px;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
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

        /* Background animation for hero section */
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes pulse-bg {
          0% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            opacity: 0.1;
          }
        }

        .animate-pulse-bg {
          animation: pulse-bg 4s ease-in-out infinite;
        }

        /* *** CSS for the changing word styling *** */
        .changing-word {
          color: black;
          text-decoration: underline;
        }

        /* Ensure the static text is always white and on its own line */
        .static-text {
          color: white;
          display: block; /* Forces it to a new line */
        }

        /* Mobile responsive adjustments */
        @media (max-width: 1024px) {
          .hero-content {
            flex-direction: column;
            text-align: center;
          }

          .hero-text {
            margin-bottom: 2rem;
          }

          .hero-image {
            width: 100%;
            max-width: 500px;
          }

          .hero-buttons {
            justify-content: center;
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .solution-categories {
            grid-template-columns: 1fr;
            margin-top: 20rem;
          }

          .why-choose-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.25rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>

      {/* Hero Section - Fixed Background to #237bff */}
      <section className="min-h-screen flex flex-col justify-center items-center text-white relative overflow-hidden" style={{ backgroundColor: '#237bff' }}>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse-bg"></div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 py-24 relative z-10">
          <div className="hero-content flex flex-col lg:flex-row items-center justify-between">
            <div className="hero-text lg:w-1/2 mb-12 lg:mb-0">
              <div className="mb-8 animate-on-scroll">
                {/* *** Corrected Hero Title Rendering *** */}
                <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  {/* Line 1: Changing word (black & underlined) + Cursor */}
                  <span>
                    <span className="changing-word">{typedWordPart}</span>
                    <span className="animate-pulse text-white">|</span>
                  </span>
                  {/* Line 2: Static text (white & always visible) */}
                  <span className="static-text">{staticText}</span>
                </h1>
              </div>

              <p className="hero-subtitle text-xl sm:text-2xl mb-12 max-w-2xl leading-relaxed animate-on-scroll">
                Pioneering the future with AI-powered automation, precision monitoring systems,
                and cutting-edge drone technology for industrial excellence.
              </p>

              <div className="hero-buttons flex flex-col sm:flex-row gap-6 animate-on-scroll">
                <Link
                  to="/projects"
                  className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-center"
                  style={{ backgroundColor: '#fff', color: '#237bff' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#fff'}
                >
                  Explore Solutions
                </Link>
                <Link
                  to="/contact"
                  className="border-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center"
                  style={{ borderColor: '#fff', color: '#fff', backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#fff';
                    e.target.style.color = '#237bff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#fff';
                  }}
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            <div className="hero-image lg:w-1/2 flex justify-center animate-on-scroll">
              <img
                src={teamImage}
                alt="Our Team"
                className="max-w-full h-auto"
                style={{ width: '100%', maxWidth: '600px' }}
              />
            </div>
          </div>

          {/* Feature Icons */}
          <div className="feature-grid grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center group animate-on-scroll">
                <div className="inline-flex p-4 rounded-2xl mb-6 group-hover:bg-blue-500 transition-colors duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <feature.icon className="h-8 w-8" style={{ color: '#fff' }} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-blue-100 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group animate-on-scroll">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4 group-hover:scale-110 transition-transform mx-auto">
                  <stat.icon className="h-8 w-8" style={{ color: '#237bff' }} />
                </div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#237bff' }}>
                  <AnimatedCounter end={stat.number} />{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section - Updated with Custom Icons and AI Drones */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 animate-on-scroll">
            Comprehensive <span className="gradient-text">Engineering Solutions</span>
          </h2>
        </div>

        <div className="relative flex flex-wrap justify-center gap-16">
          {/* Center Circle */}
          <div className="absolute inset-0 flex justify-center animate-on-scroll">
            <div className="w-40 h-40 md:w-48 md:h-48 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-blue-500">
              <span className="text-base md:text-lg font-bold text-gray-900 text-center px-4">
                Comprehensive Engineering Solutions
              </span>
            </div>
          </div>

          {/* Surrounding Solutions */}
          <div className="solution-categories grid grid-cols-1 md:grid-cols-3 gap-12 mt-64">
            {solutionCategories.map((category, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col items-center animate-on-scroll ${
                  category.id === 'iot' ? 'line-connector-iot' :
                  category.id === 'energy' ? 'line-connector-energy' : 'line-connector'
                }`}
              >
                <div className="relative mb-6"></div>
                <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 w-64 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  {/* Use img tag for custom icons */}
                  <img
                    src={category.icon}
                    alt={category.title}
                    className="h-10 w-10 mb-4 mx-auto object-contain"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Updated */}
      <section className="py-20" style={{ backgroundColor: '#237bff' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="gradient-text">Us</span>
            </h2>
            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto opacity-90">
              We deliver excellence through innovation, reliability, and unmatched expertise
            </p>
          </div>

          <div className="why-choose-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl border border-white border-opacity-30 bg-white bg-opacity-5 hover:bg-opacity-10 transition-all duration-300 animate-on-scroll"
              >
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1 opacity-80" />
                <span className="text-white">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section with Rotating Logos */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted By <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Partnering with leading organizations to deliver exceptional results
            </p>
          </div>

          <div className="relative overflow-hidden animate-on-scroll">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="logos-container animate-rotate-logos flex items-center gap-12 md:gap-16">
              {[...trustedLogos, ...trustedLogos].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 group hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed colors */}
      <section className="py-20" style={{ backgroundColor: '#237bff' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white animate-on-scroll">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg sm:text-xl mb-10 max-w-4xl mx-auto leading-relaxed text-blue-100 animate-on-scroll">
            Let's discuss how our advanced engineering solutions can help you achieve your goals and stay ahead of the competition with cutting-edge technology.
          </p>

          <div className="cta-buttons flex flex-col sm:flex-row gap-6 justify-center animate-on-scroll">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-center"
              style={{ backgroundColor: '#fff', color: '#237bff' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#fff'}
            >
              Start Your Project Today
            </Link>
            <Link
              to="/projects"
              className="border-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center"
              style={{
                borderColor: '#fff',
                color: '#fff',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#fff';
                e.target.style.color = '#237bff';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#fff';
              }}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;