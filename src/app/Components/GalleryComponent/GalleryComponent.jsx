'use client'
import { useEffect, useState } from "react"
import Image from 'next/image'
import { X } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'
const galleryImages = [
    '/DataInsight.png?height=300&width=300&text=Data+Insight+Screenshot',
    '/placeholder.svg?height=300&width=300&text=Lab+Work',
    '/placeholder.svg?height=300&width=300&text=Coding+Session',
    '/placeholder.svg?height=300&width=300&text=Award+Ceremony',
    '/placeholder.svg?height=300&width=300&text=Research+Poster',
    '/placeholder.svg?height=300&width=300&text=Team+Project',
  ]


  export default function GalleryComponent() {
    const [activeImage, setActiveImage] = useState(null)
  
    return (
    <motion.div
        className="max-w-6xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-2xl relative z-10 mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-left">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={() => setActiveImage(src)}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 ease-in-out hover:opacity-80"
              />
            </div>
          ))}
        </div>
  
        {activeImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-4xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-h-[90vh] bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={activeImage}
                  alt="Full size gallery image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 transition-transform duration-300 ease-in-out hover:scale-110"
                onClick={() => setActiveImage(null)}
              >
                <X size={24} />
                <span className="sr-only">Close</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
    )
  }