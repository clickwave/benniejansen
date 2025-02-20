'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

export default function OverOns() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading-lg mb-8">Over ons</h1>
            <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
              Studio Bennie Jansen is een architectenbureau dat zich specialiseert in het ontwerpen van exclusieve woonvilla's, woonboerderijen en recreatieparken.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-md mb-12 text-center">Onze missie</h2>
            <p className="text-lg leading-relaxed mb-8">
              Wij vertalen jouw dromen naar unieke ontwerpen die zowel tijdloos als vernieuwend zijn. We streven naar duurzaamheid en verwerven functionaliteit met esthetiek. Samen met jou cre&euml;ren we architectuur die het heden omarmt met een tijdloze visie, unieke expressie en innovatieve concepten.
            </p>
            <p className="text-lg leading-relaxed">
              Het nieuwe modernisme gaat over functionele eenvoud, het mocanisme. Wij geloven dat architectuur moet bijdragen aan een betere wereld, door duurzame en energiezuinige oplossingen te integreren in elk ontwerp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-6xl mx-auto"
          >
            <h2 className="heading-md mb-16 text-center">Ons team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/team/bennie-jansen.jpg"
                  alt="Bennie Jansen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="heading-sm mb-6">Bennie Jansen</h3>
                <p className="text-lg leading-relaxed mb-8">
                  Als architect en oprichter van Studio Bennie Jansen, breng ik meer dan 20 jaar ervaring mee in het ontwerpen van exclusieve woningen en recreatieve projecten. Mijn passie ligt in het creëren van tijdloze architectuur die perfect aansluit bij de wensen en levensstijl van onze klanten.
                </p>
                <p className="text-lg leading-relaxed">
                  Door nauw samen te werken met onze klanten en partners, zorgen we ervoor dat elk project niet alleen voldoet aan de hoogste esthetische standaarden, maar ook praktisch en duurzaam is voor de toekomst.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-md mb-16 text-center">Onze kernwaarden</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-medium mb-4">Duurzaamheid</h3>
                <p className="text-gray-600">
                  We integreren duurzame oplossingen in elk ontwerp, met oog voor zowel het milieu als de toekomst.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Innovatie</h3>
                <p className="text-gray-600">
                  We blijven vooroplopen met innovatieve concepten en moderne technologieën in architectuur.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Kwaliteit</h3>
                <p className="text-gray-600">
                  We streven naar de hoogste kwaliteit in elk aspect van ons werk, van ontwerp tot uitvoering.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-lg mb-8">Start je nieuwe project met ons</h2>
            <p className="text-lg md:text-2xl mb-12 leading-relaxed">
              We maken graag kennis met je! Gedurende iedere fase van een bouwproject geven we vorm aan jouw wensen. Het resultaat is een maatwerk gebouw dat je verwachtingen overtreft.
            </p>
            <Link 
              href="/contact"
              className="btn-outline inverted"
            >
              <span className="relative z-10">Contact ons</span>
              <span className="btn-outline-borders"></span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
