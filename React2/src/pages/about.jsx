import React from 'react';
import {
  FaUsers,
  FaBullseye,
  FaRocket,
  FaAward,
  FaHandshake,
  FaHeart,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

function About() {
  const teamMembers = [
    { id: 1, name: 'Sarah Johnson', role: 'CEO & Founder', img: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Michael Chen', role: 'CTO', img: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Emma Williams', role: 'Lead Designer', img: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, name: 'David Miller', role: 'Marketing Head', img: 'https://i.pravatar.cc/150?img=4' },
  ];

  const values = [
    { icon: <FaUsers />, title: 'Collaboration', desc: 'Working together for better solutions' },
    { icon: <FaBullseye />, title: 'Excellence', desc: 'Striving for the highest standards' },
    { icon: <FaRocket />, title: 'Innovation', desc: 'Always pushing boundaries' },
    { icon: <FaHeart />, title: 'Passion', desc: 'Loving what we do' },
    { icon: <FaHandshake />, title: 'Integrity', desc: 'Honest and transparent in all dealings' },
    { icon: <FaAward />, title: 'Quality', desc: 'Delivering exceptional results' },
  ];

  const milestones = [
    { year: '2018', title: 'Company Founded', desc: 'Started with 3 team members' },
    { year: '2019', title: 'First Major Client', desc: 'Secured Fortune 500 partnership' },
    { year: '2020', title: 'Remote Transition', desc: 'Successfully adapted to remote work' },
    { year: '2022', title: 'Global Expansion', desc: 'Opened offices in 3 countries' },
    { year: '2023', title: 'Award Recognition', desc: 'Won Best Innovation Award' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Our Company
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            We're passionate about creating innovative solutions that make a real difference
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Learn More About Us
          </button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                  <FaBullseye size={24} />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg">
                To empower businesses with cutting-edge technology solutions that drive growth,
                enhance efficiency, and create lasting value for our clients and their customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                  <FaRocket size={24} />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg">
                To be the world's most trusted partner for digital transformation,
                recognized for our innovation, excellence, and commitment to making
                technology accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leader, discover our journey
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <div className="inline-flex items-center gap-2 mb-2">
                        <FaCheckCircle className="text-green-500" />
                        <span className="text-sm font-semibold text-blue-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-12 h-12 rounded-full bg-blue-600 text-white items-center justify-center font-bold mx-auto z-10">
                    {milestone.year}
                  </div>

                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="text-blue-600 text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The talented people behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative mb-4 mx-auto w-48 h-48">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="rounded-full w-full h-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to work with us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of satisfied clients who trust us with their digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
              Contact Us <FaArrowRight />
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all">
              View Our Work
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;