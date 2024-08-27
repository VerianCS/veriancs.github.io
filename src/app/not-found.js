'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background particles */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white opacity-20"
          style={{
            width: Math.random() * 50 + 10,
            height: Math.random() * 50 + 10,
          }}
          animate={{
            x: [0, Math.random() * 400 - 200],
            y: [0, Math.random() * 400 - 200],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="relative w-full max-w-3xl">
        {/* Glassmorphic container */}
        <motion.div 
          className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-12 border border-white border-opacity-20 shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Floating clouds */}
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute pointer-events-none"
              style={{
                top: `${20 * index}%`,
                left: `${30 * index}%`,
                width: `${100 - 20 * index}px`,
                height: `${100 - 20 * index}px`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full fill-current text-white"
              >
                <path
                  d="M41.5,-64.5C54.6,-56.9,66.5,-47,73.4,-34.1C80.2,-21.2,82,-5.3,78.7,9.2C75.4,23.7,67,36.8,56.3,47.4C45.6,58,32.6,66.1,18.5,70.1C4.3,74.2,-11,74.2,-24.8,69.7C-38.6,65.2,-50.9,56.2,-60.2,44.5C-69.5,32.8,-75.8,18.3,-77.7,2.8C-79.5,-12.7,-76.9,-29.2,-68.4,-41.9C-59.9,-54.6,-45.5,-63.5,-31.5,-70.5C-17.5,-77.5,-3.9,-82.6,8.1,-79.8C20.1,-77,40.2,-66.3,41.5,-64.5Z"
                  transform="translate(100 100)"
                />
              </svg>
            </motion.div>
          ))}

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.h1 
              className="text-8xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-300 to-purple-400"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              404
            </motion.h1>
            <motion.p 
              className="text-2xl text-white mb-8 font-light"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              The science still hasn't designed this
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="/"
                className="inline-block bg-white bg-opacity-20 text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-30 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg backdrop-filter backdrop-blur-sm"
              >
                Go Home
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Glassmorphic decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 backdrop-filter backdrop-blur-lg border border-white border-opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white bg-opacity-10 rounded-full translate-x-1/2 translate-y-1/2 backdrop-filter backdrop-blur-lg border border-white border-opacity-20"></div>
      </div>
    </div>
  )
}