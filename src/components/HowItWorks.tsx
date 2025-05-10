'use client';

import { Banknote, Briefcase, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Briefcase,
    title: 'Submit License',
    desc: 'Upload your license details securely through our platform.',
  },
  {
    icon: Clock,
    title: 'Get Valuation',
    desc: 'Receive an instant fair market value estimate within minutes.',
  },
  {
    icon: Banknote,
    title: 'Get Paid',
    desc: 'Complete the sale and receive payment within 24 hours.',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const HowItWorks = () => (
  <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 sm:py-20 lg:py-28">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Simple 3-Step Process
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
          Turn your unused software licenses into cash—quickly, securely, and hassle-free.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-100 dark:border-gray-700"
            variants={cardVariants}
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white mb-4">
              <step.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
