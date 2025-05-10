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
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
         {/* Header */}
         <header className="border-b border-blue-100 dark:border-gray-800">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
               <div className="flex items-center justify-between h-16 lg:h-20">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                     <Link href="/" className="flex items-center space-x-2">
                        <svg
                           width="32"
                           height="32"
                           viewBox="0 0 100 100"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           className="text-blue-600 dark:text-blue-400"
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
                        <span className="text-xl font-bold text-blue-900 dark:text-blue-100 tracking-tight">
                           {siteConfig.name}
                        </span>
                     </Link>
                  </div>

                  {/* Desktop Navigation */}
                  <nav className="hidden lg:flex lg:items-center lg:space-x-8">
                     {navigationConfig.mainNav.map((item) => (
                        <a
                           key={item.href}
                           href={item.href}
                           className="text-base font-medium text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100"
                        >
                           {item.title}
                        </a>
                     ))}
                  </nav>

                  {/* Right side items */}
                  <div className="flex items-center space-x-4">
                     <ThemeToggle />
                     <a
                        href={heroConfig.cta.primary.href}
                        className="hidden lg:inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700 dark:hover:from-blue-600 dark:hover:to-cyan-600 transition-colors"
                     >
                        Get Started
                     </a>
                     {/* Mobile Menu Button */}
                     <button
                        type="button"
                        className="p-2 text-blue-900 dark:text-blue-100 rounded-lg lg:hidden hover:bg-blue-50 dark:hover:bg-gray-800"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation"
                     >
                        {isMenuOpen ? (
                           <X className="w-6 h-6" strokeWidth={2} />
                        ) : (
                           <Menu className="w-6 h-6" strokeWidth={2} />
                        )}
                     </button>
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
                           <a
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-2 text-blue-900 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg"
                           >
                              {item.title}
                           </a>
                        ))}
                        <a
                           href={heroConfig.cta.primary.href}
                           className="block w-full px-4 py-3 text-center text-white bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700 dark:hover:from-blue-600 dark:hover:to-cyan-600"
                        >
                           Get Started
                        </a>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </header>

         {/* Hero Content */}
         <section className="py-12 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
               <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div>
                     <p className="text-base font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                        Software License Marketplace
                     </p>
                     <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl lg:mt-8">
                        {heroConfig.title}
                     </h1>
                     <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 sm:text-xl lg:mt-8">
                        {heroConfig.description}
                     </p>

                     <div className="mt-8 space-y-4 lg:mt-12 sm:space-y-0 sm:flex sm:space-x-5">
                        <a
                           href={heroConfig.cta.primary.href}
                           className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700 dark:hover:from-blue-600 dark:hover:to-cyan-600 transition-colors"
                        >
                           {heroConfig.cta.primary.text}
                           <ArrowRight
                              className="w-5 h-5 ml-3"
                              strokeWidth={2}
                           />
                        </a>
                        <a
                           href={heroConfig.cta.secondary.href}
                           className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors"
                        >
                           {heroConfig.cta.secondary.text}
                        </a>
                     </div>
                  </div>

                  {/* Hero Image */}
                  <div className="order-first lg:order-last">
                     <div className="relative w-full h-64 sm:h-96 lg:h-[500px]">
                        <Image
                           src="https://plus.unsplash.com/premium_photo-1729011776151-0b7778d329fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                           alt="Software License Management Illustration"
                           layout="fill"
                           objectFit="contain"
                           priority
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Hero;
