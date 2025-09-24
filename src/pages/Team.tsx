import React from "react";
import { motion } from "framer-motion";
import { User, Cpu, Server, Settings, Network } from "lucide-react";

const teamMembers = [
  {
    name: "Mr Abid Shirwani",
    role: "Founder & CEO",
    description: "Provides leadership, vision, and overall company strategy.",
    icon: User,
  },
  {
    name: "Dr Tahir Mushtaq",
    role: "CTO",
    description: "Oversees all technical operations and drives product innovation.",
    icon: User,
  },
  {
    name: "Yazman Mahmood",
    role: "Web & AI Engineer",
    description: "Specializes in AI systems, automation pipelines, and full-stack development.",
    icon: User,
  },
  {
    name: "Umair Idrees",
    role: "Hardware Engineer",
    description: "Designs and optimizes embedded systems, circuits, and drone hardware.",
    icon: User,
  },
  {
    name: "Bilal Shirwani",
    role: "IoT Engineer",
    description: "Focuses on IoT systems, connectivity, and real-time monitoring solutions.",
    icon: User,
  },
];

const Team = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-[#237bff] overflow-hidden">
        {/* subtle pattern background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 sm:mb-6 font-normal"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-white max-w-3xl mx-auto leading-relaxed font-normal"
          >
            The people driving AHKS Engineering — combining leadership, AI,
            hardware, and IoT expertise.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 text-center"
              >
                {/* Placeholder Image */}
                <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <member.icon className="h-10 w-10 text-[#237bff]" />
                </div>

                <h3 className="text-xl font-semibold text-black mb-1">
                  {member.name}
                </h3>
                <p className="text-[#237bff] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
