import './globals.css'
import { DM_Sans } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { Metadata } from 'next'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Studio Bennie Jansen | Architectuur & Design',
  description: 'Studio Bennie Jansen is een architectenbureau gespecialiseerd in het ontwerpen van inspirerende woningen en tijdloze ontwerpen.',
  keywords: 'architectuur, design, woningen, duurzaam bouwen, Studio Bennie Jansen',
  openGraph: {
    title: 'Studio Bennie Jansen | Architectuur & Design',
    description: 'Studio Bennie Jansen is een architectenbureau gespecialiseerd in het ontwerpen van inspirerende woningen en tijdloze ontwerpen.',
    url: 'https://studiobenniejansen.nl',
    siteName: 'Studio Bennie Jansen',
    locale: 'nl_NL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={dmSans.variable}>
      <body className={`${dmSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
