import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Arsenal",
      description: "Select from our premium selection of undetected gaming solutions. Each product is crafted for maximum performance and stealth.",
      icon: "🎯",
      color: "from-neon-purple to-neon-pink"
    },
    {
      number: "02",
      title: "Instant Delivery",
      description: "Receive your credentials instantly after payment. No waiting, no delays - get back to dominating the game immediately.",
      icon: "⚡",
      color: "from-neon-blue to-neon-cyan"
    },
    {
      number: "03",
      title: "Setup & Launch",
      description: "Follow our simple setup guide. Download, install, and launch your chosen solution in minutes, not hours.",
      icon: "🚀",
      color: "from-neon-cyan to-neon-green-400"
    },
    {
      number: "04",
      title: "Dominate & Win",
      description: "Experience the power of premium gaming tools. Climb the ranks, outplay opponents, and achieve victory after victory.",
      icon: "🏆",
      color: "from-neon-pink to-neon-purple"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-darker-bg"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Getting started with Vetra is simple. Follow these four easy steps to unlock your gaming potential.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Step Card */}
              <div className="bg-card-bg rounded-2xl p-6 border border-border-glow/20 hover:border-neon-purple/50 transition-all duration-300 h-full text-center">
                {/* Step Number */}
                <div className="relative mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-2xl font-bold text-white mb-4`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-cyan rounded-full flex items-center justify-center text-sm font-bold text-dark-bg">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-neon-purple to-neon-blue transform -translate-y-1/2 z-0"></div>
              )}

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="bg-gradient-to-br from-neon-purple/10 to-neon-blue/10 rounded-2xl p-6 border border-neon-purple/20">
            <div className="text-neon-purple text-3xl mb-4">🔐</div>
            <h3 className="text-xl font-bold text-white mb-3">Advanced Security</h3>
            <p className="text-gray-300 text-sm">Military-grade encryption and anti-detection systems ensure your safety and anonymity.</p>
          </div>

          <div className="bg-gradient-to-br from-neon-cyan/10 to-neon-blue/10 rounded-2xl p-6 border border-neon-cyan/20">
            <div className="text-neon-cyan text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
            <p className="text-gray-300 text-sm">Optimized performance with zero impact on your game's frame rate or responsiveness.</p>
          </div>

          <div className="bg-gradient-to-br from-neon-pink/10 to-neon-purple/10 rounded-2xl p-6 border border-neon-pink/20">
            <div className="text-neon-pink text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-bold text-white mb-3">Auto Updates</h3>
            <p className="text-gray-300 text-sm">Automatic updates ensure compatibility with the latest game versions and security patches.</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-2xl border border-neon-purple/30"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Dominate?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of players who have already elevated their game with Vetra. 
            Experience the difference that premium gaming solutions make.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-neon-purple/25 transition-all duration-300"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
