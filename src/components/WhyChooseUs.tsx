'use client';

import { Clock, ShieldCheck, Star, User } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    desc: "All licenses undergo strict verification for secure transactions.",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Star,
    title: "5-Star Support",
    desc: "Our expert team is available 24/7 to assist you anytime.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    desc: "Enjoy seamless processing and payouts within 24 hours.",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    icon: User,
    title: "Trusted Community",
    desc: "Join 50,000+ happy users in our growing marketplace.",
    gradient: "from-orange-600 to-red-600",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const WhyChooseUs = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-100 dark:to-blue-300 bg-clip-text text-transparent">
          Why Choose <span className="text-blue-600 dark:text-blue-400">SoftSell</span>
        </h2>
        <motion.p 
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 sm:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Secure. Fast. Reliable. Everything you need in one marketplace.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 mt-14 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            className="group p-6 text-center bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
          >
            <motion.div 
              className={`flex items-center justify-center w-16 h-16 mx-auto text-white bg-gradient-to-r ${item.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <item.icon className="w-8 h-8" />
            </motion.div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700 dark:hover:from-blue-600 dark:hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl"
        >
          Get Started Today
        </a>
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUs;
