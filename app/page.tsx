'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  inverted?: boolean
  className?: string
}

const Button = ({ children, inverted = false, className = '' }: ButtonProps) => (
  <motion.button 
    className={`btn-outline ${inverted ? 'inverted' : ''} ${className}`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <span className="relative z-10">{children}</span>
    <span className="btn-outline-borders"></span>
  </motion.button>
)

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Studio Bennie Jansen Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto px-4 h-full flex items-end pb-32">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-4xl md:text-7xl font-light max-w-4xl leading-tight"
            >
              Het architectenbureau voor inspirerende woningen en tijdloze ontwerpen
            </motion.h1>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl mb-12 font-light tracking-wide">WAT WE DOEN</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
              Wij vertalen jouw dromen naar unieke ontwerpen die zowel tijdloos als vernieuwend zijn. 
              We streven naar duurzaamheid en verwerven functionaliteit met esthetiek. 
              Samen met jou creëren we architectuur die het heden omarmt met een tijdloze visie.
            </p>
            <Link href="/projecten">
              <Button>
                PROJECTEN
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="h-screen relative">
        <Image
          src="/images/hero.jpg"
          alt="Architectuur"
          fill
          sizes="100vw"
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white text-6xl md:text-9xl font-light tracking-widest"
          >
            ARCHITECTUUR
          </motion.h2>
        </div>
      </section>

      {/* Brochure Section */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl mb-8 font-light tracking-wide">BROCHURE</h2>
              <p className="text-lg md:text-xl mb-12">
                Vraag hier onze digitale brochure aan
              </p>
              <Button inverted>
                BROCHURE
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 relative aspect-[4/3]"
            >
              <Image
                src="/images/brochure.jpg"
                alt="Brochure"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                quality={90}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
