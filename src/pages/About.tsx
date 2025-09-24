import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Database,
  Navigation, // use this instead of Drone
  Users,
  Award,
  Globe,
  Clock,
  Lightbulb,
  Briefcase,
  Shield,
} from "lucide-react";


const About = () => {
  const stats = [
    { number: "10+", label: "Years Industry Experience", icon: Briefcase },
    { number: "5+", label: "Projects Completed", icon: Cpu },
    { number: "24/7", label: "Monitoring Systems", icon: Shield },
    { number: "Custom", label: "Drone Solutions", icon: Navigation }, // swapped here
  ];
  

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We deliver reliable, practical engineering solutions that work in the field — not just on paper.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description:
        "Adapting AI, IoT, and automation technologies to real-world problems across industries.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description:
        "Systems built with redundancy and designed for continuous operation without compromise.",
    },
    {
      icon: Lightbulb,
      title: "Sustainability",
      description:
        "Engineering with efficiency in mind, reducing waste and enabling long-term impact.",
    },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-[#237bff] overflow-hidden">
        {/* patterned border like thinger.io */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 sm:mb-6 font-normal">
              About <span className="font-normal">AHKS Engineering</span>
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto leading-relaxed font-normal">
              Founded in early 2024, AHKS Engineering combines over a decade of
              professional industry experience with next-generation automation,
              monitoring, and drone technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl text-white font-normal">
                Our Mission
              </h2>
              <p className="text-white text-base sm:text-lg leading-relaxed font-normal">
                We bridge the gap between traditional engineering and future
                automation, applying AI, IoT, and robotics to real-world
                industries.
              </p>
              <p className="text-white text-base sm:text-lg leading-relaxed font-normal">
                From agriculture monitoring to autonomous security, our systems
                are built for efficiency, cost reduction, and sustainable value.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="p-2 sm:p-3 bg-[#237bff] rounded-lg w-fit mx-auto mb-3 sm:mb-4">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl text-black mb-2 font-semibold">
                    {stat.number}
                  </div>
                  <div className="text-black text-xs sm:text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-black mb-4 sm:mb-6 font-normal">
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto font-normal">
              The principles that guide every solution we deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="text-center group bg-[#f0fdff] p-6 rounded-xl border border-[#237bff]/10"
              >
                <div className="p-4 bg-[#237bff] rounded-full w-fit mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl text-black mb-3 font-semibold">
                  {value.title}
                </h3>
                <p className="text-black leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl sm:text-3xl font-bold text-black mb-8 text-center"
            >
              Our Journey
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gray-100 rounded-2xl p-6 text-center border border-gray-200"
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#237bff] mb-2">
                  2024
                </div>
                <div className="text-black font-medium">Company Founded</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gray-100 rounded-2xl p-6 text-center border border-gray-200"
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#237bff] mb-2">
                  2025
                </div>
                <div className="text-black font-medium">On-Track to lead the Industry </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
