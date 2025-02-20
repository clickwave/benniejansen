'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-medium mb-6">Contact</h3>
            <div className="space-y-4">
              <p>Studio Bennie Jansen B.V.</p>
              <p>Arthur Koolkwartier 51<br />6711 VH Ede</p>
              <p>KvK-nummer: 87664534</p>
            </div>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Direct contact</h3>
            <div className="space-y-4">
              <p>
                <a href="mailto:info@studiobenniejansen.nl" className="hover:text-gray-600">
                  info@studiobenniejansen.nl
                </a>
              </p>
              <p>
                <a href="tel:+31629336071" className="hover:text-gray-600">
                  +31 (0)6 29 33 60 71
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-medium mb-6">Menu</h3>
            <nav className="space-y-4">
              <Link href="/" className="block hover:text-gray-600">
                Home
              </Link>
              <Link href="/projecten" className="block hover:text-gray-600">
                Projecten
              </Link>
              <Link href="/over-ons" className="block hover:text-gray-600">
                Over ons
              </Link>
              <Link href="/contact" className="block hover:text-gray-600">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Studio Bennie Jansen B.V. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  )
}
