'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';
import { navigationConfig, heroConfig, siteConfig } from '@/config/site';
import Link from 'next/link';

const mobileMenuVariants = {
   hidden: { opacity: 0, height: 0, transition: { duration: 0.2 } },
   visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
   exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

const Hero = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <div className="bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
         {/* Header */}
         <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-blue-100 dark:border-gray-800">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
               <div className="flex items-center justify-between h-16 lg:h-20">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                     <Link href="/" className="flex items-center space-x-2 group">
                        <motion.div
                           whileHover={{ scale: 1.1 }}
                           whileTap={{ scale: 0.95 }}
                        >
                           <svg
                              width="32"
                              height="32"
                              viewBox="0 0 100 100"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-blue-600 dark:text-blue-400 transition-colors group-hover:text-blue-700 dark:group-hover:text-blue-300"
                           >
                              <circle
                                 cx="50"
                                 cy="50"
                                 r="45"
                                 stroke="currentColor"
                                 strokeWidth="10"
                              />
                              <path
                                 d="M35 50 L50 65 L75 35"
                                 stroke="currentColor"
                                 strokeWidth="8"
                                 fill="none"
                              />
                           </svg>
                        </motion.div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-100 dark:to-blue-300 bg-clip-text text-transparent tracking-tight">
                           {siteConfig.name}
                        </span>
                     </Link>
                  </div>

                  {/* Desktop Navigation */}
                  <nav className="hidden lg:flex lg:items-center lg:space-x-8">
                     {navigationConfig.mainNav.map((item) => (
                        <motion.a
                           key={item.href}
                           href={item.href}
                           className="text-base font-medium text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 relative group"
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                        >
                           {item.title}
                           <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full" />
                        </motion.a>
                     ))}
                  </nav>

                  {/* Right side items */}
                  <div className="flex items-center space-x-4">
                     <ThemeToggle />
                     <motion.a
                        href={heroConfig.cta.primary.href}
                        className="hidden lg:inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700 dark:hover:from-blue-600 dark:hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        Get Started
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                     </motion.a>
                     {/* Mobile Menu Button */}
                     <motion.button
                        type="button"
                        className="p-2 text-blue-900 dark:text-blue-100 rounded-lg lg:hidden hover:bg-blue-50 dark:hover:bg-gray-800"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                     >
                        {isMenuOpen ? (
                           <X className="w-6 h-6" strokeWidth={2} />
                        ) : (
                           <Menu className="w-6 h-6" strokeWidth={2} />
                        )}
                     </motion.button>
                  </div>
               </div>

               {/* Mobile Menu */}
               <AnimatePresence>
                  {isMenuOpen && (
                     <motion.div
                        key="mobile-menu"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                        className="lg:hidden pb-4 space-y-4"
                     >
                        {navigationConfig.mainNav.map((item) => (
                           <motion.a
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-2 text-blue-900 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                              whileHover={{ x: 5 }}
                           >
                              {item.title}
                           </motion.a>
                        ))}
                        <motion.a
                           href={heroConfig.cta.primary.href}
                           className="block w-full px-4 py-3 text-center text-white bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700 dark:hover:from-blue-600 dark:hover:to-cyan-600 shadow-lg"
                           whileHover={{ scale: 1.02 }}
                           whileTap={{ scale: 0.98 }}
                        >
                           Get Started
                        </motion.a>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </header>

         {/* Hero Content */}
         <section className="py-12 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
               <div className="grid items-center gap-12 lg:grid-cols-2">
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                  >
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase"
                     >
                        Software License Marketplace
                     </motion.p>
                     <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl lg:mt-8 bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-100 dark:to-blue-300 bg-clip-text text-transparent"
                     >
                        {heroConfig.title}
                     </motion.h1>
                     <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-4 text-lg text-gray-600 dark:text-gray-300 sm:text-xl lg:mt-8"
                     >
                        {heroConfig.description}
                     </motion.p>

                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-8 space-y-4 lg:mt-12 sm:space-y-0 sm:flex sm:space-x-5"
                     >
                        <motion.a
                           href={heroConfig.cta.primary.href}
                           className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700 dark:hover:from-blue-600 dark:hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl"
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                        >
                           {heroConfig.cta.primary.text}
                           <ArrowRight
                              className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1"
                              strokeWidth={2}
                           />
                        </motion.a>
                        <motion.a
                           href={heroConfig.cta.secondary.href}
                           className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-gray-700 transition-all shadow-md hover:shadow-lg"
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                        >
                           {heroConfig.cta.secondary.text}
                        </motion.a>
                     </motion.div>
                  </motion.div>

                  {/* Hero Image */}
                  <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.5, delay: 0.6 }}
                     className="order-first lg:order-last"
                  >
                     <div className="relative w-full h-64 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                           src="https://plus.unsplash.com/premium_photo-1729011776151-0b7778d329fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                           alt="Software License Management Illustration"
                           layout="fill"
                           objectFit="cover"
                           priority
                           className="transition-transform duration-700 hover:scale-105"
                        />
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Hero;
