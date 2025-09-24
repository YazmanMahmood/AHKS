import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Ahmed Hassan',
      role: 'CEO & Lead Engineer',
      bio: 'Visionary leader with 15+ years in advanced engineering systems and AI implementation.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Sarah Chen',
      role: 'AI Systems Director',
      bio: 'Machine learning expert specializing in autonomous systems and predictive analytics.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Drone Operations Lead',
      bio: 'Aerospace engineer with expertise in autonomous flight systems and safety protocols.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Priya Patel',
      role: 'IoT Solutions Architect',
      bio: 'PhD in Computer Engineering, specializing in IoT infrastructure and sensor networks.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'James Thompson',
      role: 'Field Operations Manager',
      bio: 'Expert in system deployment and maintenance with focus on agricultural and industrial applications.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Lisa Wang',
      role: 'Software Development Lead',
      bio: 'Full-stack developer specializing in real-time systems and user interface design.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
  ];

  return (
    <section id="team" className="py-20 bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Our <span className="text-accent">Team</span>
          </h2>
          <p className="text-xl text-main max-w-3xl mx-auto">
            Meet the brilliant minds behind AHKS Engineering's innovative solutions. 
            Our diverse team of experts brings together decades of experience in engineering, AI, and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-main rounded-2xl p-6 shadow-lg"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-[#e6f7ff] transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-light px-4 py-1 rounded-full text-sm font-medium">
                    Team Member
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-accent mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-3">{member.role}</p>
                <p className="text-main leading-relaxed mb-6">{member.bio}</p>

                <div className="flex justify-center space-x-3">
                  <button className="p-2 bg-main hover:bg-accent rounded-full transition-colors duration-200 group">
                    <Linkedin className="h-5 w-5 text-accent group-hover:text-light" />
                  </button>
                  <button className="p-2 bg-main hover:bg-accent rounded-full transition-colors duration-200 group">
                    <Github className="h-5 w-5 text-accent group-hover:text-light" />
                  </button>
                  <button className="p-2 bg-main hover:bg-accent rounded-full transition-colors duration-200 group">
                    <Mail className="h-5 w-5 text-accent group-hover:text-light" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        
      </div>
    </section>
  );
};

export default Team;