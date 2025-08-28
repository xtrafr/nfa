import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import InteractiveFeatures from './components/InteractiveFeatures';
import Products from './components/Products';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg relative">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-border-glow/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold gradient-text">VETRA</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#features" className="text-gray-300 hover:text-neon-purple transition-colors">Features</a>
              <a href="#products" className="text-gray-300 hover:text-neon-purple transition-colors">Products</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-neon-purple transition-colors">How It Works</a>
              <a href="#contact" className="text-gray-300 hover:text-neon-purple transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <InteractiveFeatures />
        <Products />
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
}

export default App;
