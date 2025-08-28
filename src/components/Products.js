import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const products = [
    {
      category: "CS2 NFA",
      status: "Available",
      statusColor: "text-green-400",
      statusBg: "bg-green-400/10",
      icon: "🎯",
      description: "Premium Counter-Strike 2 accounts with various medal configurations",
      items: [
        { name: "Premier Ready", price: "€1.04", available: true, features: ["Basic Premier", "Ready to Play", "24h Support"] },
        { name: "Premier Ready 4+ Medals", price: "€1.25", available: true, features: ["4+ Medals", "Higher Trust", "Priority Support"] },
        { name: "Premier Ready Inactive", price: "€1.50", available: true, features: ["Inactive Status", "Stealth Mode", "Premium Support"] },
        { name: "Premier Ready 10+ Medals", price: "€2.00", available: true, features: ["10+ Medals", "Elite Status", "VIP Support"] },
        { name: "Premier Ready Skins", price: "€4.00", available: true, features: ["Rare Skins", "Exclusive Items", "Dedicated Support"] }
      ]
    },
    {
      category: "Rust NFA",
      status: "Unavailable",
      statusColor: "text-red-400",
      statusBg: "bg-red-400/10",
      icon: "🏗️",
      description: "Rust accounts with advanced features (Coming Soon)",
      items: [
        { name: "Rust NFA", price: "€1.50", available: false, features: ["Advanced Features", "Stealth Mode", "Coming Soon"] }
      ]
    },
    {
      category: "Ech0 External",
      status: "Available",
      statusColor: "text-green-400",
      statusBg: "bg-green-400/10",
      icon: "🚀",
      description: "External gaming solutions with flexible subscription plans",
      items: [
        { name: "14 days", price: "€6", available: true, features: ["14 Day Access", "Full Features", "Email Support"] },
        { name: "30 days", price: "€9", available: true, features: ["30 Day Access", "Priority Updates", "Discord Support"] },
        { name: "90 days", price: "€21", available: true, features: ["90 Day Access", "VIP Features", "24/7 Support"] }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: '🎮' },
    { id: 'cs2', name: 'CS2 NFA', icon: '🎯' },
    { id: 'rust', name: 'Rust NFA', icon: '🏗️' },
    { id: 'ech0', name: 'Ech0 External', icon: '🚀' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category.toLowerCase().includes(selectedCategory));

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-dark-bg to-darker-bg"
          style={{ y }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border border-neon-purple/30 rounded-full mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-neon-cyan text-sm font-medium">PRODUCTS</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Choose Your <span className="gradient-text">Weapon</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select from our arsenal of premium gaming solutions designed for competitive domination
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'border-neon-purple bg-neon-purple/20 text-neon-purple'
                  : 'border-border-glow/30 text-gray-400 hover:border-neon-purple/50 hover:text-neon-purple'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.category}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
              onMouseEnter={() => setHoveredProduct(product.category)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-card-bg to-border-glow/20 rounded-3xl p-8 border border-border-glow/30 hover:border-neon-purple/50 transition-all duration-500 h-full backdrop-blur-sm relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02, 
                  y: -15,
                  boxShadow: "0 30px 60px rgba(139, 92, 246, 0.3)"
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000
                }}
              >
                {/* Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 rounded-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProduct === product.category ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Category Header */}
                <div className="relative z-10 text-center mb-8">
                  <motion.div
                    className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-neon-purple to-neon-blue flex items-center justify-center text-4xl mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {product.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{product.category}</h3>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                  
                  <motion.span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${product.statusColor} ${product.statusBg} border border-current/20`}
                    animate={{ 
                      scale: hoveredProduct === product.category ? [1, 1.05, 1] : 1 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {product.status}
                  </motion.span>
                </div>

                {/* Product Items */}
                <div className="relative z-10 space-y-4">
                  {product.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`group/item relative p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                        item.available 
                          ? 'bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 border border-neon-purple/20 hover:border-neon-purple/40 hover:bg-gradient-to-r hover:from-neon-purple/20 hover:to-neon-blue/20' 
                          : 'bg-gray-800/50 border border-gray-600/30 opacity-60'
                      }`}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className={`font-semibold ${item.available ? 'text-white' : 'text-gray-400'}`}>
                          {item.name}
                        </span>
                        <span className={`font-bold text-xl ${item.available ? 'text-neon-cyan' : 'text-gray-500'}`}>
                          {item.price}
                        </span>
                      </div>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature, featureIndex) => (
                          <motion.span
                            key={featureIndex}
                            className="text-xs px-2 py-1 bg-neon-purple/20 text-neon-purple rounded-full border border-neon-purple/30"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  className="relative z-10 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
                      product.status === "Available"
                        ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:shadow-lg hover:shadow-neon-purple/25'
                        : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    }`}
                    disabled={product.status === "Unavailable"}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-purple"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">
                      {product.status === "Available" ? "Get Started" : "Coming Soon"}
                    </span>
                  </motion.button>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-neon-cyan rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-2 h-2 bg-neon-purple rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                />
              </motion.div>

              {/* 3D Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-neon-purple/30 to-neon-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
                animate={{
                  scale: hoveredProduct === product.category ? [1, 1.1, 1] : 1
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        {/* Enhanced Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center p-12 bg-gradient-to-r from-neon-purple/20 via-neon-blue/20 to-neon-cyan/20 rounded-3xl border border-neon-purple/30 backdrop-blur-sm"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Why Choose Vetra Products?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="text-neon-cyan text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🔒
              </motion.div>
              <div className="font-semibold text-white mb-2">Undetected</div>
              <div className="text-sm">Advanced anti-detection systems with 99.9% success rate</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="text-neon-purple text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                ⚡
              </motion.div>
              <div className="font-semibold text-white mb-2">High Performance</div>
              <div className="text-sm">Optimized for maximum FPS with zero performance impact</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="text-neon-blue text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                🛡️
              </motion.div>
              <div className="font-semibold text-white mb-2">24/7 Support</div>
              <div className="text-sm">Round-the-clock assistance from our expert team</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
