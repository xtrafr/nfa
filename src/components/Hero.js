import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const dynamicTexts = [
    "DOMINATE THE GAME",
    "UNLEASH YOUR POWER",
    "BECOME UNSTOPPABLE",
    "RISE TO THE TOP",
    "MASTER THE ARENA"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const floatingElements = [
    { icon: "⚡", delay: 0, duration: 4 },
    { icon: "🎯", delay: 1, duration: 5 },
    { icon: "🔥", delay: 2, duration: 6 },
    { icon: "💎", delay: 3, duration: 4.5 },
    { icon: "🚀", delay: 4, duration: 5.5 },
    { icon: "🏆", delay: 5, duration: 4.8 }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Animated Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl md:text-6xl"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            opacity: 0 
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
            rotate: [0, 360]
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Dynamic Background Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border border-neon-purple/30 rounded-full mb-8 backdrop-blur-sm"
        >
          <motion.div
            className="w-2 h-2 bg-neon-cyan rounded-full mr-3"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-neon-cyan font-medium text-sm">PREMIUM GAMING SOLUTIONS</span>
          <motion.div
            className="w-2 h-2 bg-neon-cyan rounded-full ml-3"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.div>

        {/* Dynamic Main Heading */}
        <motion.div
          className="mb-8"
          style={{
            perspective: 1000,
            transformStyle: "preserve-3d"
          }}
        >
          <motion.h1
            key={currentTextIndex}
            initial={{ opacity: 0, y: 50, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -50, rotateX: -90 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-6"
            style={{
              transform: `rotateX(${springRotateX}deg) rotateY(${springRotateY}deg)`,
              transformStyle: "preserve-3d"
            }}
          >
            <span className="gradient-text">{dynamicTexts[currentTextIndex]}</span>
          </motion.h1>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Experience the future of competitive gaming with our
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 text-xl md:text-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.span
              className="text-neon-cyan font-bold"
              whileHover={{ scale: 1.1, color: "#8B5CF6" }}
              transition={{ duration: 0.3 }}
            >
              Undetected
            </motion.span>
            <span className="text-white">•</span>
            <motion.span
              className="text-neon-purple font-bold"
              whileHover={{ scale: 1.1, color: "#06B6D4" }}
              transition={{ duration: 0.3 }}
            >
              Unstoppable
            </motion.span>
            <span className="text-white">•</span>
            <motion.span
              className="text-neon-pink font-bold"
              whileHover={{ scale: 1.1, color: "#3B82F6" }}
              transition={{ duration: 0.3 }}
            >
              Unmatched
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Interactive CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan text-white font-bold text-xl rounded-2xl overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Get Started Now</span>
            <motion.div
              className="absolute -right-2 -top-2 w-6 h-6 bg-neon-pink rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              borderColor: "#06B6D4",
              backgroundColor: "rgba(6, 182, 212, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 border-2 border-neon-cyan text-neon-cyan font-bold text-xl rounded-2xl hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-neon-cyan"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">View Products</span>
            <motion.div
              className="absolute -left-2 -bottom-2 w-4 h-4 bg-neon-purple rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
          </motion.button>
        </motion.div>

        {/* Interactive Stats with Hover Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16"
        >
          {[
            { number: "10K+", label: "Active Users", color: "neon-purple", icon: "👥" },
            { number: "99.9%", label: "Uptime", color: "neon-cyan", icon: "⚡" },
            { number: "24/7", label: "Support", color: "neon-blue", icon: "🛡️" },
            { number: "50+", label: "Countries", color: "neon-pink", icon: "🌍" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center p-6 bg-gradient-to-br from-card-bg to-border-glow/20 rounded-2xl border border-border-glow/30 hover:border-neon-purple/50 transition-all duration-300 backdrop-blur-sm">
                <motion.div
                  className={`text-4xl mb-2 text-${stat.color}`}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <div className={`text-3xl md:text-4xl font-bold text-${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative"
          >
            <div className="w-8 h-12 border-2 border-neon-purple rounded-full flex justify-center relative overflow-hidden">
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-3 bg-gradient-to-b from-neon-purple to-neon-cyan rounded-full mt-2"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-neon-purple/20 to-transparent"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-neon-purple text-sm font-medium"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              SCROLL
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mouse Trail Effect */}
      <motion.div
        className="fixed w-4 h-4 bg-neon-cyan rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8
        }}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;
