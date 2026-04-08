# Premium Dark Portfolio

A sophisticated personal portfolio website inspired by nikolaradeski.com, reimagined with a dark theme, modern glassmorphism, and buttery-smooth animations.

## ✨ Features

- **Smooth Scroll**: Lenis-powered smooth scrolling with GSAP ScrollTrigger integration
- **Glassmorphism Design**: Elegant glass-morphic components with blur and transparency
- **Premium Animations**: GSAP-driven scroll triggers, parallax effects, and hover interactions
- **Dark Theme**: Minimal, high-impact aesthetic with dark base (#0A0A0A)
- **Responsive**: Fully responsive design with clamp() typography
- **Performance**: Optimized for smooth 60fps animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with React 18
- **Styling**: Tailwind CSS with custom utilities
- **Animations**: GSAP + ScrollTrigger
- **Smooth Scroll**: Lenis
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/testerBro555/my-portfolio.git

# Install dependencies
cd my-portfolio
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with Lenis initialization
│   └── page.tsx           # Home page
├── components/
│   ├── Navbar.tsx         # Floating navbar with glassmorphism
│   └── Hero.tsx           # Hero section with clamp typography
├── lib/
│   ├── lenis-setup.ts     # Lenis smooth scroll configuration
│   └── animations.ts      # Reusable GSAP animations
├── styles/
│   └── globals.css        # Global styles with blur blobs
tailwind.config.ts         # Tailwind configuration with utilities
next.config.js             # Next.js configuration
tsconfig.json              # TypeScript configuration
```

## 🎨 Design System

### Colors
- **Base**: `#0A0A0A` (dark-950)
- **Glass**: `rgba(255, 255, 255, 0.1)` with blur
- **Accent**: Blue-500 to Purple-500 gradient

### Typography
- **Hero Text**: `clamp(60px, 10vw, 140px)`
- **Large Heading**: `clamp(40px, 8vw, 80px)`
- **Medium Heading**: `clamp(28px, 5vw, 48px)`
- **Body Text**: `clamp(20px, 3vw, 32px)`

### Spacing
- **Section Gap**: 120px - 160px
- **Container Max Width**: 1200px - 1400px

## 🎯 Animation Utilities

The project includes pre-built GSAP animation functions:

- `fadeUpOnScroll()` - Fade and slide up on scroll
- `slideInFromLeft()` - Slide in from left with fade
- `parallaxOnScroll()` - Parallax effect on scroll
- `revealText()` - Character-by-character text reveal
- `hoverScale()` - Scale up on hover
- `glowOnHover()` - Glow effect on hover

## 🔧 Customization

### Smooth Scroll Settings

Edit `src/lib/lenis-setup.ts`:
```typescript
lenis = new Lenis({
  duration: 1.2,        // Scroll duration in seconds
  easing: (t) => {...}, // Custom easing function
  smooth: true,         // Enable smooth scroll
})
```

### Colors & Theme

Edit `tailwind.config.ts` to customize colors, add new utilities, or adjust the design system.

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

Deploy to Vercel:
```bash
vercel deploy
```

## 🎬 Scroll Experience

The portfolio features a premium scroll experience:
- **Smooth Duration**: 1.2 seconds with custom easing
- **No Jitter**: Synchronized GSAP ticker
- **Weighted Feel**: Inertia-based easing curve
- **Responsive**: Adapts to device capabilities

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and use this portfolio template for your own projects!