'use client';

import { Clock, ShieldCheck, Star, User } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    desc: "All licenses undergo strict verification for secure transactions.",
  },
  {
    icon: Star,
    title: "5-Star Support",
    desc: "Our expert team is available 24/7 to assist you anytime.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    desc: "Enjoy seamless processing and payouts within 24 hours.",
  },
  {
    icon: User,
    title: "Trusted Community",
    desc: "Join 50,000+ happy users in our growing marketplace.",
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
  <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          Why Choose <span className="text-blue-600 dark:text-blue-400">SoftSell</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
          Secure. Fast. Reliable. Everything you need in one marketplace.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-14 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            className="p-6 text-center bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700 shadow-sm rounded-2xl hover:shadow-lg transition-shadow duration-300"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
          >
            <div className="flex items-center justify-center w-14 h-14 mx-auto text-white bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 rounded-full">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
