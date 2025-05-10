'use client';

import { Banknote, Briefcase, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Briefcase,
    title: 'Submit License',
    desc: 'Upload your license details securely through our platform.',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Clock,
    title: 'Get Valuation',
    desc: 'Receive an instant fair market value estimate within minutes.',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    icon: Banknote,
    title: 'Get Paid',
    desc: 'Complete the sale and receive payment within 24 hours.',
    gradient: 'from-green-600 to-emerald-600',
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
  <section className="bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 sm:py-20 lg:py-28">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <motion.div 
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-100 dark:to-blue-300 bg-clip-text text-transparent">
          Simple 3-Step Process
        </h2>
        <motion.p 
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Turn your unused software licenses into cash—quickly, securely, and hassle-free.
        </motion.p>
      </motion.div>

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
            className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-blue-100 dark:border-gray-700"
            variants={cardVariants}
          >
            <motion.div 
              className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <step.icon className="w-8 h-8" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
              {step.desc}
            </p>
            <motion.div 
              className="mt-6 flex items-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ x: 5 }}
            >
              <span className="text-sm font-medium">Learn more</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

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
          Start Selling Now
          <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
