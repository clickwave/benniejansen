'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface Project {
  title: string
  subtitle: string
  image: string
  href: string
  categories: string[]
}

const projects: Project[] = [
  {
    title: 'Villa VL',
    subtitle: 'Moderne villa met riet',
    image: '/images/projects/VILLA-VL-9984-HR.jpg',
    href: '/projects/moderne-villa',
    categories: ['exclusieve-villa', 'landelijk', 'modern', 'rietgedekt', 'woning-metamorfose']
  },
  {
    title: 'Gestucte villa met riet',
    subtitle: 'Luxe woonvilla',
    image: '/images/projects/landelijke-minimalistische-villa-met-riet-9.jpg',
    href: '/projects/gestucte-villa',
    categories: ['exclusieve-villa', 'landelijk', 'modern', 'rietgedekt']
  },
  {
    title: 'Jaren 30 woning met moderne uitbouw',
    subtitle: 'Moderne uitbreiding',
    image: '/images/projects/moderne-schuurwoning-van-antraciet-zink-in-nijkerk-hero-home.jpg',
    href: '/projects/woonhuis-av',
    categories: ['woning-aanbouwen-uitbouwen', 'modern', 'renovatie']
  },
  {
    title: 'Gooische villa met riet',
    subtitle: 'Luxe villa',
    image: '/images/projects/VILLA-VL-0097-HR-500x620.jpg',
    href: '/projects/villa-vh',
    categories: ['exclusieve-villa', 'landelijk', 'modern', 'rietgedekt']
  },
  {
    title: 'Vakantiehuis Ameland',
    subtitle: 'Modern recreatieverblijf',
    image: '/images/projects/renovatie-corten-500x620.jpg',
    href: '/projects/vakantiehuis-ameland',
    categories: ['buitenverblijven', 'kubistisch', 'modern', 'schuurwoning']
  },
  {
    title: 'Modern tuinhuis Lunteren',
    subtitle: 'Bijgebouw met karakter',
    image: '/images/projects/Image12n-500x620.jpg',
    href: '/projects/tuinverblijf-ad',
    categories: ['buitenverblijven', 'landelijk', 'modern']
  },
  {
    title: 'Kubistische villa met patio',
    subtitle: 'Moderne woonvilla',
    image: '/images/projects/moderne-schuurwoning-van-antraciet-zink-in-nijkerk-hero-home.jpg',
    href: '/projects/kubistische-villa-veenendaal',
    categories: ['exclusieve-villa', 'kubistisch', 'modern']
  },
  {
    title: 'Moderne villa Veenendaal',
    subtitle: 'Strakke architectuur',
    image: '/images/projects/VILLA-VL-9984-HR.jpg',
    href: '/projects/villa-j01',
    categories: ['exclusieve-villa', 'kubistisch', 'modern']
  },
  {
    title: 'Minimalistische villa met riet',
    subtitle: 'Luxe woonvilla',
    image: '/images/projects/landelijke-minimalistische-villa-met-riet-9.jpg',
    href: '/projects/villa-r',
    categories: ['exclusieve-villa', 'landelijk', 'modern', 'rietgedekt']
  },
  {
    title: 'Uitbouw black steel',
    subtitle: 'Moderne aanbouw',
    image: '/images/projects/moderne-schuurwoning-van-antraciet-zink-in-nijkerk-hero-home.jpg',
    href: '/projects/uitbouw-black-steel',
    categories: ['woning-aanbouwen-uitbouwen', 'modern', 'renovatie']
  },
  {
    title: 'Kleine uitbouw Lunteren',
    subtitle: 'Uitbreiding woning',
    image: '/images/projects/renovatie-corten-500x620.jpg',
    href: '/projects/uitbouw-vdp',
    categories: ['woning-aanbouwen-uitbouwen', 'landelijk', 'modern', 'renovatie']
  },
  {
    title: 'Moderne villa met natuursteen',
    subtitle: 'Exclusieve woonvilla',
    image: '/images/projects/VILLA-VL-9984-HR.jpg',
    href: '/projects/villa-g',
    categories: ['exclusieve-villa', 'landelijk', 'modern', 'woning-metamorfose']
  },
  {
    title: 'Villa Veenendaal',
    subtitle: 'Moderne architectuur',
    image: '/images/projects/landelijke-minimalistische-villa-met-riet-9.jpg',
    href: '/projects/villa-e',
    categories: ['exclusieve-villa', 'landelijk', 'modern', 'rietgedekt']
  },
  {
    title: 'Moderne schuurwoningen Nijkerk',
    subtitle: 'Serie schuurwoningen',
    image: '/images/projects/moderne-schuurwoning-van-antraciet-zink-in-nijkerk-hero-home.jpg',
    href: '/projects/de-veldkamp',
    categories: ['exclusieve-villa', 'modern', 'schuurwoning', 'seriematig']
  },
  {
    title: 'Woningmetamorfose Zwartebroek',
    subtitle: 'Complete renovatie',
    image: '/images/projects/renovatie-corten-500x620.jpg',
    href: '/projects/woning-he',
    categories: ['exclusieve-villa', 'modern', 'renovatie', 'woning-metamorfose']
  },
  {
    title: 'Woonboerderij Diepenveen',
    subtitle: 'Landelijke renovatie',
    image: '/images/projects/landelijke-minimalistische-villa-met-riet-9.jpg',
    href: '/projects/woonboerderij-diepenveen',
    categories: ['landelijk', 'modern', 'renovatie', 'woonboerderij']
  },
  {
    title: 'Woonboerderij Dodewaard',
    subtitle: 'Boerderij renovatie',
    image: '/images/projects/moderne-schuurwoning-van-antraciet-zink-in-nijkerk-hero-home.jpg',
    href: '/projects/mansardewoning-dodewaard',
    categories: ['landelijk', 'renovatie', 'woonboerderij']
  },
  {
    title: 'Landelijke villa Ede',
    subtitle: 'Luxe woonvilla',
    image: '/images/projects/VILLA-VL-9984-HR.jpg',
    href: '/projects/villa-d',
    categories: ['exclusieve-villa', 'interieur', 'landelijk', 'modern', 'rietgedekt', 'schuurwoning']
  },
  {
    title: 'Woonboerderij Gorssel',
    subtitle: 'Landelijke renovatie',
    image: '/images/projects/landelijke-minimalistische-villa-met-riet-9.jpg',
    href: '/projects/woonboerderij-gorssel',
    categories: ['landelijk', 'modern', 'renovatie', 'woonboerderij']
  },
  {
    title: 'Woonboerderij Hoevelaken',
    subtitle: 'Boerderij renovatie',
    image: '/images/projects/moderne-schuurwoning-van-antraciet-zink-in-nijkerk-hero-home.jpg',
    href: '/projects/woonboerderij-g2',
    categories: ['interieur', 'landelijk', 'modern', 'renovatie', 'woonboerderij']
  }
]

const categories = [
  { id: 'all', label: 'Alles' },
  { id: 'woning-aanbouwen-uitbouwen', label: 'Aan-/uitbouw' },
  { id: 'exclusieve-villa', label: 'Exclusieve villa' },
  { id: 'interieur', label: 'Interieur' },
  { id: 'kubistisch', label: 'Kubistisch' },
  { id: 'landelijk', label: 'Landelijk' },
  { id: 'modern', label: 'Modern' },
  { id: 'recreatie-met-zorg', label: 'Parken' },
  { id: 'buitenverblijven', label: 'Recreatie' },
  { id: 'renovatie', label: 'Renovatie' },
  { id: 'rietgedekt', label: 'Rietgedekt' },
  { id: 'schuurwoning', label: 'Schuurwoning' },
  { id: 'seriematig', label: 'Seriematig' },
  { id: 'woning-metamorfose', label: 'Woningmetamorfose' },
  { id: 'woonboerderij', label: 'Woonboerderij' }
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.categories.includes(activeCategory)
  )

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
            <h1 className="heading-lg mb-8">Onze projecten</h1>
            <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
              Benieuwd wat wij voor onze klanten realiseerden? Neem een kijkje tussen onze exclusieve woonvillas, woonboerderijen en recreatieparken.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/3] overflow-hidden bg-gray-100"
              >
                <Link href={project.href} className="block w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
                  <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="text-white">
                      <h3 className="text-2xl md:text-3xl font-light mb-2">{project.title}</h3>
                      <p className="text-lg font-light opacity-80">{project.subtitle}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
