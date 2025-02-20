'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  type: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'algemeen'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
            <h1 className="heading-lg mb-8">Contact</h1>
            <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
              Wij maken graag kennis met je! Neem contact met ons op voor een vrijblijvend gesprek over jouw droomproject.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                <div>
                  <h2 className="heading-md mb-8">Contactgegevens</h2>
                  <div className="space-y-4">
                    <p className="text-lg">
                      <strong>Studio Bennie Jansen B.V.</strong><br />
                      Arthur Koolkwartier 51<br />
                      6711 VH Ede
                    </p>
                    <p className="text-lg">
                      <strong>KvK-nummer:</strong><br />
                      87664534
                    </p>
                    <p className="text-lg">
                      <strong>Telefoon:</strong><br />
                      <a href="tel:+31629336071" className="hover:text-gray-600">+31 (0)6 29 33 60 71</a>
                    </p>
                    <p className="text-lg">
                      <strong>E-mail:</strong><br />
                      <a href="mailto:info@studiobenniejansen.nl" className="hover:text-gray-600">
                        info@studiobenniejansen.nl
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="heading-sm mb-4">Openingstijden</h3>
                  <div className="space-y-2">
                    <p className="text-lg">Maandag t/m vrijdag: 9:00 - 17:30</p>
                    <p className="text-lg">Zaterdag & zondag: Gesloten</p>
                  </div>
                </div>

                <div>
                  <h3 className="heading-sm mb-4">Route</h3>
                  <p className="text-lg">
                    Ons kantoor is goed bereikbaar vanaf de A12 en A30. Er is voldoende gratis parkeergelegenheid voor de deur.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                      Type aanvraag
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="algemeen">Algemene vraag</option>
                      <option value="offerte">Offerte aanvraag</option>
                      <option value="afspraak">Afspraak maken</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Naam
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mailadres
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Bericht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 px-8 hover:bg-gray-900 transition-colors duration-300"
                  >
                    Versturen
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.8884673088874!2d5.674899776687444!3d52.02766997191775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c653be7c65ab89%3A0x8b74ce6d3a737c49!2sArthur%20Koolkwartier%2051%2C%206711%20VH%20Ede!5e0!3m2!1sen!2snl!4v1708380000000!5m2!1sen!2snl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  )
}
