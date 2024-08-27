'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gamepad2, Code, Users, Star, Zap, ExternalLink, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const features = [
  { title: 'Immersive Gameplay', icon: Gamepad2, description: 'Experience a captivating world with innovative mechanics.' },
  { title: 'Advanced Graphics', icon: Zap, description: 'Stunning visuals powered by cutting-edge rendering technology.' },
  { title: 'Multiplayer', icon: Users, description: 'Engage in thrilling battles with players from around the globe.' },
  { title: 'Customization', icon: Star, description: 'Personalize your character with endless customization options.' },
]

const teamMembers = [
  { name: 'Alice Johnson', role: 'Lead Developer', image: '/placeholder.svg?height=100&width=100&text=AJ' },
  { name: 'Bob Smith', role: 'Art Director', image: '/placeholder.svg?height=100&width=100&text=BS' },
  { name: 'Carol Williams', role: 'Game Designer', image: '/placeholder.svg?height=100&width=100&text=CW' },
  { name: 'David Brown', role: 'Sound Engineer', image: '/placeholder.svg?height=100&width=100&text=DB' },
]

export default function ArcoProject() {
  const [activeImage, setActiveImage] = useState(null)
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 relative overflow-hidden">
      {/* Fancy pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="arco-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="white" strokeWidth="1"/>
              <circle cx="20" cy="20" r="4" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arco-pattern)"/>
        </svg>
      </div>

      {/* Go back button */}
      <motion.button
        className="fixed top-4 left-4 z-50 bg-white bg-opacity-20 text-white rounded-full p-2 hover:bg-opacity-30 transition-all duration-300"
        onClick={() => router.back()}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowLeft size={24} />
        <span className="sr-only">Go back</span>
      </motion.button>

      <motion.div
        className="max-w-6xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-2xl relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <header className="text-center mb-12">
          <motion.h1
            className="text-6xl font-bold text-white mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Arco
          </motion.h1>
          <h2 className="text-2xl text-indigo-200">The Next-Gen Gaming Experience</h2>
        </header>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">About Arco</h3>
          <p className="text-indigo-100 text-lg">
            Arco is a groundbreaking multiplayer game that combines stunning visuals, innovative gameplay mechanics, and a rich, immersive world. Set in a futuristic universe, players embark on epic quests, engage in thrilling battles, and forge their own destiny.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-20 rounded-xl p-6 shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <feature.icon className="text-indigo-300 mb-4" size={32} />
                <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-indigo-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Development Progress</h3>
          <div className="bg-white bg-opacity-20 rounded-xl p-6 shadow-lg">
            <div className="flex justify-between mb-2">
              <span className="text-white">Overall Progress</span>
              <span className="text-indigo-200">75%</span>
            </div>
            <div className="w-full bg-indigo-900 rounded-full h-2.5">
              <div className="bg-indigo-300 h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Meet the Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-20 rounded-xl p-4 shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold text-white">{member.name}</h4>
                <p className="text-indigo-200">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-6">Get Involved</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="#"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code className="mr-2" size={20} />
              Join Beta
            </motion.a>
            <motion.a
              href="#"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="mr-2" size={20} />
              Visit Website
            </motion.a>
          </div>
        </section>
      </motion.div>
    </div>
  )
}