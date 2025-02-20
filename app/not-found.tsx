import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-light mb-8">404</h1>
        <h2 className="text-2xl font-light mb-8">Paginaaa niet gevonden</h2>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
        >
          Terug naar home
        </Link>
      </div>
    </div>
  )
}
