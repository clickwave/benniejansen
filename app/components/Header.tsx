'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  }

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`relative ${isScrolled ? '' : 'drop-shadow-lg'}`}
            >
              <Link href="/">
                <Image
                  src={isScrolled ? "/images/logo-dark.svg" : "/images/logo.svg"}
                  alt="Studio Bennie Jansen"
                  width={180}
                  height={50}
                  priority
                  className="h-12 w-auto transition-all duration-300"
                />
              </Link>
            </motion.div>

            {/* Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="z-50 p-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="space-y-2">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className={`block w-8 h-0.5 transition-colors ${
                    isMenuOpen ? 'bg-white' : isScrolled ? 'bg-black' : 'bg-white'
                  } ${!isScrolled && !isMenuOpen ? 'drop-shadow-lg' : ''}`}
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`block w-8 h-0.5 transition-colors ${
                    isMenuOpen ? 'bg-white' : isScrolled ? 'bg-black' : 'bg-white'
                  } ${!isScrolled && !isMenuOpen ? 'drop-shadow-lg' : ''}`}
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className={`block w-8 h-0.5 transition-colors ${
                    isMenuOpen ? 'bg-white' : isScrolled ? 'bg-black' : 'bg-white'
                  } ${!isScrolled && !isMenuOpen ? 'drop-shadow-lg' : ''}`}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black z-40"
          >
            <div className="container mx-auto px-4 h-screen flex items-center justify-center">
              <motion.nav
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="text-center"
              >
                {['HOME', 'PROJECTEN', 'OVER ONS', 'CONTACT'].map((item) => (
                  <motion.div
                    key={item}
                    variants={itemVariants}
                    className="mb-8"
                  >
                    <Link
                      href={`/${item === 'HOME' ? '' : item.toLowerCase().replace(' ', '-')}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white text-4xl md:text-6xl font-light tracking-wider hover:opacity-70 transition-opacity inline-block"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
