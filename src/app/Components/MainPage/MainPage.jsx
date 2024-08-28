'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin, Mail, FileText, Beaker, Code, Award, Book, Users, ExternalLink, Twitter, Github, X } from 'lucide-react'
import Image from 'next/image'
import FooterComponent from '../FooterComponent/FooterComponent'
import BackgroundAudio from '../AudioPlayerComponent/AudioPlayerComponent'
import GalleryComponent from '../GalleryComponent/GalleryComponent'
const cloudColors = [
  'from-blue-300 to-purple-300',
  'from-pink-300 to-yellow-300',
  'from-green-300 to-blue-300',
  'from-yellow-300 to-red-300',
]

const SocialLinks = [
  {icon: Linkedin, link: "https://www.linkedin.com/in/brian-av-57aba8231/"},
  {icon: Github, link: "https://www.github.com/veriancs"},
  {icon: Twitter, link: "https://twitter.com/ring6dev"}
]

const projects = [
  { title: 'AI Research Paper', type: 'science', description: 'Published in Nature on advanced machine learning algorithms.', link: '#' },
  { title: 'Web App for Data Visualization', type: 'dev', description: 'Interactive dashboard for complex scientific data.', link: '#' },
  { title: 'Quantum Computing Simulation', type: 'both', description: 'Simulated quantum circuits using custom software.', link: '#' },
  { title: 'Climate Change Prediction Model', type: 'science', description: 'Developed a model to predict climate patterns.', link: '#' },
  { title: 'Open Source Library for Data Analysis', type: 'dev', description: 'Created a Python library for advanced data analysis techniques.', link: '#' },
  { title: 'Quantum Cryptography Protocol', type: 'both', description: 'Designed and implemented a new quantum cryptography protocol.', link: '#' },
  { title: 'Micro Angelic OS', type: 'science', description: 'Designed an AI powered micro Operative system for embbed and IoT technology called Angela OS', link: '#' },
  { title: 'Personal portfolio', type: 'dev', description: 'My personal portfolio, made on NEXTJS with REACT + TAILWINDCSS, glassmorphism style', link: '#' },
]

const skills = ['Python', 'JavaScript', 'React', 'Machine Learning', 'Data Analysis', 'Quantum Physics', 'Node.js', 'TensorFlow', 'SQL', 'Git', 'Docker', 'AWS', "NextJS", "C#", ".NET", "GO", "Unity"]

const publications = [
  { title: 'Quantum Entanglement in Neural Networks', journal: 'Nature Physics', year: 2023, link: '#' },
  { title: 'Novel Approaches to Climate Modeling Using AI', journal: 'Science', year: 2022, link: '#' },
  { title: 'Efficient Algorithms for Quantum Circuit Optimization', journal: 'Quantum', year: 2021, link: '#' },
]

const awards = [
  { title: 'Outstanding Young Scientist Award', organization: 'International Science Foundation', year: 2023 },
  { title: 'Best Paper Award', conference: 'International Conference on Quantum Computing', year: 2022 },
  { title: 'Innovation in Technology Award', organization: 'Tech Innovators Association', year: 2021 },
]


export default function MainPage() {


  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      <BackgroundAudio />
      {/* Cloud background */}

      <motion.div
        className="max-w-6xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-2xl relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <header className="text-center mb-12 relative">
          <motion.div
            className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/AngelaMoon.jpg?height=160&width=160&text=Profile"
              alt="Dr. Jane Doe"
              width={160}
              height={160}
              className="object-cover"
            />
          </motion.div>
          <motion.h1
            className="text-4xl font-bold text-white mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            NVAEIL
          </motion.h1>
          <h2 className="text-2xl text-blue-200">Developer & AI engineer</h2>
          
          <div className="flex justify-center space-x-4 mt-4">
            {SocialLinks.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <motion.a
                  key={index}
                  href={socialLink.link}
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </div>
        </header>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4">About Me</h3>
          <p className="text-blue-100">
            I'm a passionate developer and AI engineer, bridging the gap between cutting-edge science and innovative software solutions. With a Bsc in Computer Sciences and years of development experience, I bring a unique perspective to both research and practical applications. My work focuses on leveraging quantum principles to enhance machine learning algorithms and developing cutting edge software solutions.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-20 rounded-xl p-6 shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-blue-100 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {project.type === 'science' && <Beaker className="text-yellow-300 mr-2" size={20} />}
                    {project.type === 'dev' && <Code className="text-green-300 mr-2" size={20} />}
                    {project.type === 'both' && (
                      <>
                        <Beaker className="text-yellow-300 mr-2" size={20} />
                        <Code className="text-green-300 mr-2" size={20} />
                      </>
                    )}
                    <span className="text-blue-200 text-sm">{project.type === 'both' ? 'Science & Dev' : project.type === 'science' ? 'Science' : 'Development'}</span>
                  </div>
                  <a href={project.link} className="text-blue-300 hover:text-blue-100 transition-colors duration-300">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-blue-100"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Publications</h3>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-20 rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{pub.title}</h4>
                    <p className="text-blue-200">{pub.journal}, {pub.year}</p>
                  </div>
                  <motion.a
                    href={pub.link}
                    className="text-blue-300 hover:text-blue-100 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                    <span className="sr-only">Link to publication</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Awards & Honors</h3>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-20 rounded-xl p-4 shadow-lg flex items-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Award className="text-yellow-300 mr-4" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-white">{award.title}</h4>
                  <p className="text-blue-200">{award.organization || award.conference}, {award.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <section>
        </section>
      </motion.div>
      
    </div>
  )
}