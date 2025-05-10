'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechStart Inc',
    text: 'SoftSell helped us recover 60% of our unused license costs. The process was seamless and their support team was phenomenal.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'IT Director',
    company: 'Global Corp',
    text: 'Never thought selling licenses could be this easy. Received payment within hours of completing the transaction!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
  },
  {
    name: 'Aisha Al-Mansoori',
    role: 'Head of Procurement',
    company: 'EmTech Solutions',
    text: 'A reliable platform with transparent pricing and exceptional service. Highly recommend SoftSell for any organization managing licenses.',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Testimonials = () => (
  <section className="bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 sm:py-20 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-100 dark:to-blue-300 bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <motion.p 
          className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hear from real businesses that used SoftSell to optimize their software assets.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 mt-14 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            className="group bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700 shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={128}
                  height={128}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 dark:ring-gray-700"
                />
              </motion.div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {t.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t.role} · {t.company}
                </p>
                <div className="flex items-center mt-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
            <motion.p 
              className="mt-6 text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              &quot;{t.text}&quot;
            </motion.p>
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
          Join Our Happy Customers
        </a>
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
