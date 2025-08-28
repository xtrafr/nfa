import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const springY = useSpring(y, { damping: 20, stiffness: 100 });

  const features = [
    {
      id: 1,
      title: "Advanced AI Detection",
      description: "Our proprietary AI system learns and adapts to stay one step ahead of anti-cheat systems.",
      icon: "🤖",
      color: "from-neon-purple to-neon-pink",
      stats: { accuracy: "99.7%", speed: "0.1ms", updates: "24/7" }
    },
    {
      id: 2,
      title: "Real-time Analytics",
      description: "Monitor your performance with live statistics, heatmaps, and detailed game analysis.",
      icon: "📊",
      color: "from-neon-blue to-neon-cyan",
      stats: { accuracy: "99.9%", speed: "0.05ms", updates: "Real-time" }
    },
    {
      id: 3,
      title: "Cross-Platform Support",
      description: "Seamlessly switch between Windows, macOS, and Linux with automatic optimization.",
      icon: "🖥️",
      color: "from-neon-cyan to-neon-green-400",
      stats: { accuracy: "99.8%", speed: "0.2ms", updates: "Auto" }
    },
    {
      id: 4,
      title: "Elite Community",
      description: "Join our exclusive Discord server with pro players, tutorials, and insider tips.",
      icon: "👑",
      color: "from-neon-pink to-neon-purple",
      stats: { accuracy: "100%", speed: "Instant", updates: "Live" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <section id="features" ref={containerRef} className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-dark-bg via-darker-bg to-dark-bg"
          style={{ y: springY }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border border-neon-purple/30 rounded-full mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-neon-cyan text-sm font-medium">FEATURES</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why <span className="gradient-text">Vetra</span> is Different
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience cutting-edge technology that revolutionizes competitive gaming
          </p>
        </motion.div>

        {/* Interactive Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className="bg-gradient-to-br from-card-bg to-border-glow/20 rounded-3xl p-8 border border-border-glow/30 hover:border-neon-purple/50 transition-all duration-500 h-full backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.02, 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(139, 92, 246, 0.2)"
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000
                }}
              >
                {/* Feature Icon */}
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-4xl mb-6 mx-auto`}
                  whileHover={{ 
                    rotate: [0, 10, -10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Feature Content */}
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">{feature.description}</p>

                {/* Interactive Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(feature.stats).map(([key, value], statIndex) => (
                    <motion.div
                      key={key}
                      className="text-center p-3 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10 rounded-xl border border-neon-purple/20"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: statIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{key}</div>
                      <div className="text-sm font-bold text-neon-cyan">{value}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-neon-purple/20 via-neon-blue/20 to-neon-cyan/20 rounded-3xl p-12 border border-neon-purple/30 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Live Performance Dashboard</h3>
              <p className="text-gray-300">See our tools in action with real-time data</p>
            </div>

            {/* Animated Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Detection Rate", value: "99.97%", icon: "🎯", color: "neon-purple" },
                { label: "Response Time", value: "0.08ms", icon: "⚡", color: "neon-cyan" },
                { label: "Uptime", value: "99.99%", icon: "🔄", color: "neon-blue" },
                { label: "User Rating", value: "4.9/5", icon: "⭐", color: "neon-pink" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`text-3xl mb-2 text-${metric.color}`}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {metric.icon}
                  </motion.div>
                  <div className={`text-2xl font-bold text-${metric.color} mb-1`}>
                    {metric.value}
                  </div>
                  <div className="text-gray-400 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Interactive CTA */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-bold text-lg rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Try Demo Now
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-neon-cyan rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;
