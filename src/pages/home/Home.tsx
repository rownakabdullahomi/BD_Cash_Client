import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  FiArrowRight,
  FiDollarSign,
  FiShield,
  FiClock,
  FiSmartphone,
} from "react-icons/fi";
import { useAuthContext } from "../../providers/AuthProvider";
import useRole from "../../hooks/useRole";
import Testimonial from "../../components/Testimonials";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import VisibilitySensor from "react-visibility-sensor";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [type, isLoading] = useRole();
  const axiosPublic = useAxiosPublic();

  const [stats, setStats] = useState({
    totalTransactions: 5000,
    activeUsers: 450,
    totalVolume: 19,
  });

  // Fetch platform stats
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await axiosPublic.get("/platform-stats");
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    };
    fetchStats();
  }, [axiosPublic]);

  // Features data
  const features = [
    {
      icon: <FiDollarSign className="w-8 h-8 text-indigo-600" />,
      title: "Low Fees",
      description: "Competitive rates that save you money on every transaction",
    },
    {
      icon: <FiClock className="w-8 h-8 text-indigo-600" />,
      title: "Instant Transfers",
      description: "Send and receive money in seconds, not days",
    },
    {
      icon: <FiShield className="w-8 h-8 text-indigo-600" />,
      title: "Bank-Level Security",
      description: "Your money and data are protected with advanced encryption",
    },
    {
      icon: <FiSmartphone className="w-8 h-8 text-indigo-600" />,
      title: "Mobile Friendly",
      description: "Full functionality on any device, anywhere",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-base-100 to-base-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl"
                >
                  <span className="block">The Modern Way to</span>
                  <span className="block text-indigo-600">
                    Send & Receive Money
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                >
                  Fast, secure payments for individuals and businesses. Join
                  millions who trust our platform for their financial
                  transactions.
                </motion.p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="rounded-md shadow"
                  >
                    {user ? (
                      type === "admin" ? (
                        <Link to={"/dashboard/admin"}>
                          <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                            Go to Dashboard <FiArrowRight className="ml-2" />
                          </button>
                        </Link>
                      ) : (
                        <Link to={"/dashboard/user"}>
                          <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                            Go to Dashboard <FiArrowRight className="ml-2" />
                          </button>
                        </Link>
                      )
                    ) : (
                      <Link to={"/login"}>
                        <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                          Get Started <FiArrowRight className="ml-2" />
                        </button>
                      </Link>
                    )}
                  </motion.div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
        >
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Payment illustration"
          />
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                name: "Transactions",
                value: stats.totalTransactions,
                suffix: "M+",
              },
              { name: "Active Users", value: stats.activeUsers, suffix: "K+" },
              { name: "Total Volume", value: stats.totalVolume, suffix: "B+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-extrabold text-white sm:text-5xl">
                  <CountUp
                    end={stat.value}
                    prefix=""
                    suffix={stat.suffix}
                    duration={2.5}
                    separator=","
                    decimals={0}
                    decimal="."
                    className="text-white"
                  />
                </div>
                <p className="mt-2 text-lg font-medium text-indigo-100">
                  {stat.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Why Choose Our Platform
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto font-semibold">
              We're redefining what you should expect from financial services
            </p>
          </motion.div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <div className="flow-root bg-base-300 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white shadow-md mx-auto">
                        {feature.icon}
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-center">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-500 text-center">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-12 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 font-semibold mx-auto">
              Get started in just a few simple steps
            </p>
          </motion.div>

          <div className="mt-10">
            <div className="relative">
              {/* <div className="hidden md:block absolute top-0 left-1/2 h-full w-0.5 bg-indigo-200 transform -translate-x-1/2"></div> */}
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {[
                  {
                    step: "1",
                    title: "Create Your Account",
                    description:
                      "Sign up in minutes with just your email and basic information",
                  },
                  {
                    step: "2",
                    title: "Link Payment Method",
                    description:
                      "Connect your bank account, card, or other payment methods",
                  },
                  {
                    step: "3",
                    title: "Start Transacting",
                    description:
                      "Send and receive money instantly with just a few clicks",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative md:text-center"
                  >
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white font-bold text-lg mx-auto md:mx-0">
                      {item.step}
                    </div>
                    <h3 className="mt-4 text-lg font-medium ">{item.title}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <Testimonial />
      {/* CTA Section */}
      <div className="bg-base-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block text-indigo-600">
                Sign up today and get your first 5 transactions free.
              </span>
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
              {user ? (
                type === "admin" ? (
                  <Link to={"/dashboard/admin"}>
                    <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                      Go to Dashboard <FiArrowRight className="ml-2" />
                    </button>
                  </Link>
                ) : (
                  <Link to={"/dashboard/user"}>
                    <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                      Go to Dashboard <FiArrowRight className="ml-2" />
                    </button>
                  </Link>
                )
              ) : (
                <Link to={"/login"}>
                  <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Get Started <FiArrowRight className="ml-2" />
                  </button>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
