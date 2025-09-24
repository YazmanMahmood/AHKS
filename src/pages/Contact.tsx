import React from 'react';
import { Mail, Phone, MapPin, Clock, Users, Award } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-[#237bff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 sm:mb-6 px-2 font-normal">
              Get In <span className="text-white font-normal">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto px-4 font-normal">
              Ready to transform your operations with our advanced engineering solutions? 
              Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl text-black mb-4 sm:mb-6 font-normal">Let's Start a Conversation</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 bg-[#237bff] rounded-lg">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg text-black mb-1 font-normal">Email Us</h3>
                    <p className="text-black text-sm sm:text-base font-normal">ahksengineering@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 bg-[#237bff] rounded-lg">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg text-black mb-1 font-normal">Call Us</h3>
                    <p className="text-black text-sm sm:text-base font-normal">+92 300 8446648</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 bg-[#237bff] rounded-lg">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg text-black mb-1 font-normal">Visit Us</h3>
                    <p className="text-black text-sm sm:text-base font-normal">Johar Town</p>
                    <p className="text-black text-sm sm:text-base font-normal">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f0fdff] border border-[#237bff]/10 rounded-2xl p-4 sm:p-6 mt-6 sm:mt-8">
                <h3 className="text-base sm:text-lg text-black mb-3 sm:mb-4 flex items-center font-normal">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-[#237bff]" />
                  Office Hours
                </h3>
                <div className="space-y-1 sm:space-y-2 text-black text-sm sm:text-base font-normal">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-black mb-4 sm:mb-6 px-2">Why Partner With Us?</h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              When you choose AHKS Engineering, you're choosing a partner committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="p-3 sm:p-4 bg-gray-200 rounded-full w-fit mx-auto mb-4 sm:mb-6">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-gray-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-normal text-black mb-3 sm:mb-4">Expert Team</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Our team of experienced engineers and AI specialists brings decades of combined expertise to every project.
              </p>
            </div>
            <div className="text-center">
              <div className="p-3 sm:p-4 bg-gray-200 rounded-full w-fit mx-auto mb-4 sm:mb-6">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-gray-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-normal text-black mb-3 sm:mb-4">Proven Results</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                With 50+ successful projects and satisfied clients, we have a track record of delivering exceptional results.
              </p>
            </div>
            <div className="text-center">
              <div className="p-3 sm:p-4 bg-gray-200 rounded-full w-fit mx-auto mb-4 sm:mb-6">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-gray-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-normal text-black mb-3 sm:mb-4">24/7 Support</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Our commitment doesn't end at deployment. We provide ongoing support and maintenance for all our solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;