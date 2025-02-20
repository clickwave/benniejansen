'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const images = [
  '/images/moderne-villa/VILLA-VL-9984-HR-1024x683.jpg',
  '/images/moderne-villa/VILLA-VL-9822-HR-1024x683.jpg',
  '/images/moderne-villa/VILLA-VL-9943-HR-1024x683.jpg',
  '/images/moderne-villa/VILLA-VL-9834-HR-1024x1024.jpg',
]

const projectDetails = [
  { label: 'Type', value: 'Woningmetamorfose' },
  { label: 'Categorie', value: 'Exclusieve villa' },
  { label: 'Opdrachtgever', value: 'Particulier' },
  { label: 'Locatie', value: 'Lunteren' },
  { label: 'Status', value: 'Opgeleverd' },
  { label: 'Periode', value: '2021-2023' },
  { label: 'Programma', value: 'Wonen en recreatief gebruik' },
]

const projectPartners = [
  { label: 'Interieurarchitect', value: 'Studio Babbet' },
  { label: 'Landschapsarchitect', value: 'Bjorn Meulenberg Tuinontwerp en Advies' },
  { label: 'Fotografie', value: 'The Art of Living' },
  { label: 'Aannemer', value: 'Aannemersbedrijf Van den Brandhof B.V.' },
  { label: 'Constructeur', value: 'IBT Veenendaal' },
  { label: 'Hovenier', value: 'Top Tuinen' },
  { label: 'Lichtplan', value: 'Lightboxx' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="info-item">
    <p className="info-label">{label}</p>
    <p className="info-value">{value}</p>
  </div>
)

export default function ModerneVilla() {
  return (
    <main className="min-h-screen">
      {/* Fullscreen Slider */}
      <section className="relative h-screen">
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          effect="fade"
          speed={1000}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 5000 }}
          className="h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="relative">
              <Image
                src={image}
                alt={`Villa VL - Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              {index === 0 && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white max-w-4xl px-4">
                    <motion.h1 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="heading-xl mb-6"
                    >
                      Villa VL
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="text-lg"
                    >
                      Moderne villa met riet
                    </motion.p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Introduction */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg">
              Aan de groene rand van Lunteren is een semi-bungalow onherkenbaar getransformeerd tot exclusieve woonvilla. Door de grenzen van het bestemmingsplan op te zoeken konden we voldoen aan het ruime programma van eisen. Doordat architectuur, interieur en tuinontwerp tot in detail zijn ontworpen, ontstaat een harmonieus totaalbeeld.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-6xl mx-auto"
          >
            <h2 className="heading-lg mb-24 text-center">Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <div>
                <h3 className="heading-md mb-16">Project Informatie</h3>
                <div className="space-y-2">
                  {projectDetails.map((detail, index) => (
                    <InfoItem key={index} label={detail.label} value={detail.value} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="heading-md mb-16">Partners</h3>
                <div className="space-y-2">
                  {projectPartners.map((partner, index) => (
                    <InfoItem key={index} label={partner.label} value={partner.value} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Concept Description */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-lg mb-16">Concept</h2>
            <p className="text-lg">
              Het bovenste volume van de woning refereert naar de archetypische vorm van een huis. Er wordt hiermee op een creatieve wijze omgegaan met gemeentelijke eisen tot het gebruik van een schuin dak.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] group overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Villa VL - Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            ))}
          </div>
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
              className="group btn-outline inverted"
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
