'use client'

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import { motion } from 'framer-motion'

export default function VoorbeeldSlider() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading-lg mb-8">Voor en Na Slider</h1>
            <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
              Voorbeelden van verschillende slider richtingen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sliders Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Left to Right Slider */}
            <div>
              <h2 className="heading-md mb-8">Links naar Rechts</h2>
              <div className="aspect-[3/2] w-full">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/voorbeeld-slider/after1.jpg"
                      alt="Voor"
                    />
                  }
                  itemTwo={
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-black/50" />
                      <ReactCompareSliderImage
                        src="/images/voorbeeld-slider/after1.jpg"
                        alt="Na"
                        className="grayscale"
                      />
                    </div>
                  }
                  position={25}
                  className="h-full"
                />
              </div>
            </div>

            {/* Right to Left Slider */}
            <div>
              <h2 className="heading-md mb-8">Rechts naar Links</h2>
              <div className="aspect-[3/2] w-full">
                <ReactCompareSlider
                  itemOne={
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-black/50" />
                      <ReactCompareSliderImage
                        src="/images/voorbeeld-slider/after2.jpg"
                        alt="Voor"
                        className="grayscale"
                      />
                    </div>
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/voorbeeld-slider/after2.jpg"
                      alt="Na"
                    />
                  }
                  position={75}
                  className="h-full"
                />
              </div>
            </div>

            {/* Top to Bottom Slider */}
            <div>
              <h2 className="heading-md mb-8">Boven naar Beneden</h2>
              <div className="aspect-[3/2] w-full">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/voorbeeld-slider/after1.jpg"
                      alt="Voor"
                    />
                  }
                  itemTwo={
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-black/50" />
                      <ReactCompareSliderImage
                        src="/images/voorbeeld-slider/after1.jpg"
                        alt="Na"
                        className="grayscale"
                      />
                    </div>
                  }
                  position={50}
                  portrait
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8">Code Voorbeeld</h2>
            <pre className="bg-gray-900 text-white p-8 rounded-lg overflow-x-auto">
              <code>{`import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

// Links naar Rechts
<ReactCompareSlider
  itemOne={<ReactCompareSliderImage src="/voor.jpg" alt="Voor" />}
  itemTwo={<ReactCompareSliderImage src="/na.jpg" alt="Na" />}
  position={25}
/>

// Rechts naar Links
<ReactCompareSlider
  itemOne={<ReactCompareSliderImage src="/na.jpg" alt="Na" />}
  itemTwo={<ReactCompareSliderImage src="/voor.jpg" alt="Voor" />}
  position={75}
/>

// Boven naar Beneden
<ReactCompareSlider
  itemOne={<ReactCompareSliderImage src="/voor.jpg" alt="Voor" />}
  itemTwo={<ReactCompareSliderImage src="/na.jpg" alt="Na" />}
  position={50}
  portrait
/>`}</code>
            </pre>
          </div>
        </div>
      </section>
    </main>
  )
}
