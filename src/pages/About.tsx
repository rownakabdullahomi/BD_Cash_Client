import { motion } from "framer-motion";
import { FiUsers, FiTarget, FiAward, FiGlobe } from "react-icons/fi";


const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "10+ years in payment technology",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "CTO",
      bio: "Security and blockchain expert",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      role: "Head of Finance",
      name: "Michael Rodriguez",
      bio: "Former banking executive",
      img: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  const stats = [
    { value: "10M+", label: "Transactions processed", icon: <FiGlobe className="w-8 h-8" /> },
    { value: "150+", label: "Countries supported", icon: <FiGlobe className="w-8 h-8" /> },
    { value: "24/7", label: "Customer support", icon: <FiUsers className="w-8 h-8" /> },
    { value: "99.9%", label: "Uptime reliability", icon: <FiAward className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 px-6 pt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                About Our Platform
              </h1>
              <p className="mt-3 text-xl text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Secure, fast, and reliable payment solutions for the modern world
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              Our Mission
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
            >
              To democratize financial services by making payments accessible, affordable, and secure for everyone, everywhere.
            </motion.p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <FiTarget className="w-8 h-8 text-blue-600" />,
                  title: "Vision",
                  desc: "A world where money moves as freely as information"
                },
                {
                  icon: <FiUsers className="w-8 h-8 text-blue-600" />,
                  title: "Values",
                  desc: "Trust, transparency, and customer-first approach"
                },
                {
                  icon: <FiAward className="w-8 h-8 text-blue-600" />,
                  title: "Commitment",
                  desc: "To security, compliance, and continuous innovation"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white shadow-md mx-auto">
                        {item.icon}
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-500 text-center">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                  {stat.icon}
                </div>
                <p className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-lg font-medium text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              Our Team
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
            >
              The passionate people behind our platform
            </motion.p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div className="flex items-center justify-center h-32 w-32 rounded-full bg-white shadow-md mx-auto overflow-hidden border-4 border-white">
                        <img
                          src={member.img}
                          alt={member.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-base text-blue-600 font-medium text-center">
                        {member.role}
                      </p>
                      <p className="mt-2 text-base text-gray-500 text-center">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block text-blue-600">Create your account today.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
          >
            <div className="inline-flex rounded-md shadow">
              <a
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get started
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;