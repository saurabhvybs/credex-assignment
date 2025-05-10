'use client';

import { motion } from 'framer-motion';

const ContactForm = () => (
  <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Get Started Today
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Have questions? Our experts are here to help you navigate your license resale.
        </p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto mt-14 space-y-6"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              required
              placeholder="Full name"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Company</label>
          <input
            type="text"
            required
            placeholder="Company name"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">License Type</label>
          <select
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-800"
          >
            <option value="" className="text-gray-500 dark:text-gray-400">Select License Type</option>
            <option className="text-gray-700 dark:text-gray-300">Microsoft Office</option>
            <option className="text-gray-700 dark:text-gray-300">Adobe Creative Cloud</option>
            <option className="text-gray-700 dark:text-gray-300">AutoCAD</option>
            <option className="text-gray-700 dark:text-gray-300">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            rows={4}
            required
            placeholder="Tell us more about your needs..."
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full px-8 py-4 font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 rounded-full hover:opacity-90 transition duration-200"
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </div>
  </section>
);

export default ContactForm;
