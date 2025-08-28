# Vetra - Premium Gaming Solutions Landing Page

A modern, premium gaming SaaS landing page built with React, TailwindCSS, and Framer Motion. Features a dark theme with glowing neon accents, smooth animations, and a fully responsive design.

## 🚀 Features

- **Modern Design**: Dark theme with neon purple, blue, and cyan accents
- **Smooth Animations**: Framer Motion powered animations throughout
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Elements**: Hover effects, glowing borders, and particle backgrounds
- **Premium Feel**: Gaming-focused aesthetic with immersive visuals

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TailwindCSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **PostCSS** - CSS processing
- **Vite** - Fast build tool

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vetra-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  'neon-purple': '#8B5CF6',
  'neon-blue': '#3B82F6',
  'neon-cyan': '#06B6D4',
  'neon-pink': '#EC4899',
  // ... more colors
}
```

### Animations
Custom animations are defined in the Tailwind config and can be modified to match your preferences.

## 📱 Sections

1. **Hero Section**: Eye-catching headline with CTA buttons
2. **Products**: CS2 NFA, Rust NFA, and Ech0 External with pricing
3. **How It Works**: 4-step process explanation
4. **Footer**: Links, social media, and company information

## 🎯 Product Information

### CS2 NFA (Available)
- Premier Ready: €1.04
- Premier Ready 4+ Medals: €1.25
- Premier Ready Inactive: €1.50
- Premier Ready 10+ Medals: €2.00
- Premier Ready Skins: €4.00

### Rust NFA (Unavailable)
- €1.50 (Coming Soon)

### Ech0 External (Available)
- 14 days: €6
- 30 days: €9
- 90 days: €21

## 🔧 Development

### Project Structure
```
src/
├── components/
│   ├── Hero.js
│   ├── Products.js
│   ├── HowItWorks.js
│   ├── Footer.js
│   └── ParticleBackground.js
├── App.js
├── index.js
└── index.css
```

### Adding New Components
1. Create your component in the `src/components/` directory
2. Import and use it in `App.js`
3. Add any necessary styles to `index.css` or use Tailwind classes

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect React settings
3. Deploy with one click

### GitHub Pages
1. Add `"homepage": "https://username.github.io/repo-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to package.json
4. Run `npm run deploy`

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please open an issue in the GitHub repository.

---

Built with ❤️ for the gaming community
"# nfa" 
