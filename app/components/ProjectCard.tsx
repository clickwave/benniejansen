'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  subtitle: string
  image: string
  href: string
  index: number
}

export default function ProjectCard({ title, subtitle, image, href, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative aspect-[4/3] overflow-hidden bg-gray-100"
    >
      <Link href={href} className="block w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="text-white">
            <h3 className="text-2xl md:text-3xl font-light mb-2">{title}</h3>
            <p className="text-lg font-light opacity-80">{subtitle}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
