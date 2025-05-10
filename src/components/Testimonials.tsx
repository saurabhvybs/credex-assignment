'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechStart Inc',
    text: 'SoftSell helped us recover 60% of our unused license costs. The process was seamless and their support team was phenomenal.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'IT Director',
    company: 'Global Corp',
    text: 'Never thought selling licenses could be this easy. Received payment within hours of completing the transaction!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Aisha Al-Mansoori',
    role: 'Head of Procurement',
    company: 'EmTech Solutions',
    text: 'A reliable platform with transparent pricing and exceptional service. Highly recommend SoftSell for any organization managing licenses.',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
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
  <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 sm:py-20 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">
          Hear from real businesses that used SoftSell to optimize their software assets.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-14 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700 shadow-sm rounded-2xl p-6 hover:shadow-md transition duration-300"
          >
            <div className="flex items-center gap-4">
              <Image
                src={t.avatar}
                alt={t.name}
                width={128}
                height={128}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{t.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
            <p className="mt-6 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              &quot;{t.text}&quot;
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
