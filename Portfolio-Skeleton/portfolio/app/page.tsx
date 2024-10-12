'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, GitHub, Linkedin, Mail } from 'lucide-react'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')

  const projects = [
    { id: 1, title: 'Project 1', description: 'A brief description of Project 1' },
    { id: 2, title: 'Project 2', description: 'A brief description of Project 2' },
    { id: 3, title: 'Project 3', description: 'A brief description of Project 3' },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, #300 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <main className="relative z-10 container mx-auto px-4 py-16">
        <section id="home" className="min-h-screen flex flex-col justify-center">
          <motion.h1
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hello, I'm <span className="text-red-500">Your Name</span>
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A passionate web developer creating amazing digital experiences.
          </motion.p>
          <motion.button
            className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold text-lg transition-colors duration-300 hover:bg-red-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection('projects')}
          >
            View My Work
          </motion.button>
        </section>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-red-500" />
        </motion.div>

        <section id="projects" className="min-h-screen py-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-gray-900 p-6 rounded-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="min-h-screen flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#ff0000' }}
              whileTap={{ scale: 0.9 }}
            >
              <GitHub className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#ff0000' }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.2, color: '#ff0000' }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-8 h-8" />
            </motion.a>
          </div>
        </section>
      </main>
    </div>
  )
}