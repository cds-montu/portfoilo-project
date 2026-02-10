# 🚀 Montu Prajapati - Full Stack Developer Portfolio

A highly interactive React.js portfolio showcasing full-stack development expertise. Built with custom animated cursor, scroll-triggered animations, modern UI/UX patterns, and production-ready architecture.

## ✨ Expertise

### 🎯 Specializations
- **Frontend**: React, Next.js, TypeScript, Tailwind CSS, UI libraries (MUI, Chakra)
- **Backend**: Node.js, Express.js, REST APIs, Authentication
- **Database**: MySQL, Knex.js, Query optimization, Schema design
- **Features**: E-commerce (cart, checkout, payments), Admin dashboards, Analytics, Role-based access, CSV uploads
- **Architecture**: Clean code, Scalable design patterns, State management (Redux, Redux Toolkit)
- **Tools**: Git, GitHub, Modern development workflow

### 🖱️ Custom Animated Cursor
- Responsive cursor that reacts to different elements
- Dynamic size and color transformations
- Smooth trail effect following mouse movement
- Different states for links, buttons, and project cards
- Spring physics for natural feel

### 🎬 Motion & Animation System
- **Framer Motion** for fluid component animations
- Scroll-triggered reveals using Intersection Observer
- Organic motion curves with custom easing
- Staggered animations for sequence effects
- Parallax and depth interactions
- Micro-animations on hover and interaction

### 📱 Responsive & Production-Ready
- Mobile-first responsive design
- Touch-friendly interactive elements
- Adaptive navigation with mobile menu
- Clean, maintainable code architecture
- Performance optimized
- Cross-browser compatible

### 🎨 Modern Visual Design
- Dark gradient backgrounds
- Glassmorphic effect elements
- Carefully curated color palette (dark primary, red accent)
- Smooth typography animations
- Intuitive user experience

## 📂 Project Structure

```
src/
├── components/
│   ├── CustomCursor.jsx      # Animated cursor system
│   ├── Navigation.jsx         # Responsive navbar with mobile menu
│   ├── Hero.jsx              # Full-viewport hero section with text reveal
│   ├── WhatIDo.jsx           # Services/skills grid with animations
│   ├── Skills.jsx            # Technical skills and categories
│   ├── Projects.jsx          # Featured projects showcase
│   └── Contact.jsx           # Contact form and social links
├── hooks/
│   └── useScrollReveal.js    # Custom hooks for scroll animations
├── App.js                    # Main application component
├── App.css                   # App-level styles
├── index.css                 # Global styles with Tailwind
└── index.js                  # React entry point
```

## 🛠️ Tech Stack

- **React 19** - UI framework with functional components and hooks
- **Framer Motion 12** - Advanced animation library
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool
- **JavaScript ES6+** - Modern JavaScript features

## 🎯 Sections Overview

## 📂 Portfolio Sections

### 1. **Hero Section**
- Full viewport introduction
- Animated text reveal (Full Stack Developer & Creative Problem-Solver)
- Professional headline with smooth transitions
- CTA buttons with spring animations
- Scroll indicator with bounce effect

### 2. **What I Specialize In**
- 6 core service areas displayed as cards
- Services include: Frontend, Full Stack, E-commerce, Admin Dashboards, State Management, Database Design
- Scroll-triggered animations
- Hover effects with gradient overlays
- Cursor interaction support

### 3. **Technical Skills** (8 Categories)
- **Frontend**: React, Next.js, JavaScript, TypeScript, HTML5, CSS3, Responsive Design
- **UI & Styling**: Tailwind CSS, MUI, Chakra UI, CSS-in-JS, Framer Motion
- **State Management**: Redux, Redux Toolkit, Context API, Zustand, React Hooks
- **Backend & APIs**: Node.js, Express.js, REST APIs, Authentication, Middleware
- **Database**: MySQL, Knex.js, Query Optimization, Migrations, Relationships
- **Advanced Features**: E-commerce, Payment Integration, Cart & Checkout, Role-based Access, CSV Upload, CRUD
- **Tools & Architecture**: Git, GitHub, Clean Architecture, RESTful Design, Version Control
- **Applications**: E-commerce Platforms, Admin Dashboards, Data Dashboards, CMS, Analytics
- Mouse position-based parallax effects
- Interactive skill badges with hover effects
- Personality traits highlighting strengths

### 4. **Recent Projects Showcase**
- 4 featured full-stack projects with detailed descriptions
- **Projects Include**:
  1. E-Commerce Platform (React, Redux Toolkit, Node.js, MySQL)
  2. Admin Dashboard (React, MUI, Express, MySQL)
  3. Content Management System (Next.js, Express.js, MySQL, Knex.js)
  4. Analytics Dashboard (React, Tailwind, Node.js, MySQL)
- Hover state transformations with animations
- Technology tags with staggered reveals
- Project-specific gradient colors
- Call-to-action buttons

### 5. **Contact Section**
- Professional contact form with animated inputs
- Contact methods: Email, Location, Response Time
- Social media links (LinkedIn, GitHub, Twitter, Email)
- Success feedback animations
- Personalized footer with copyright

### 6. **Navigation Bar**
- Fixed header with scroll-triggered blur effect
- Personalized branding (Montu Prajapati)
- Desktop navigation menu with underline animations
- Mobile hamburger menu with smooth slide transitions
- CTA button for direct contact

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Running

1. **The dev server is already running locally!**
   - Open: http://localhost:3001

2. **To restart the server:**
   ```bash
   npm start
   ```

3. **For production build:**
   ```bash
   npm run build
   ```

## 🎭 Animation Features Deep Dive

### Custom Scroll Reveal Hook
```javascript
const [ref, isVisible] = useScrollReveal();
```
- Uses Intersection Observer API
- Automatically triggers animations when elements enter viewport
- Customizable threshold and margin
- Prevents memory leaks with proper cleanup

### Mouse Position Hook
```javascript
const mousePosition = useMousePosition();
```
- Tracks mouse position normalized to -1 to 1 range
- Used for parallax and tilt effects
- Efficient event listener management

### Cursor Behavior Types
- **Default**: Thin circle (20px × 20px)
- **Link/Button Hover**: Expands to 40px, changes color to red
- **Project Cards**: 60px diameter with glow effect
- **Skill Cards**: 50px with special trail animation

## 🎨 Customization Guide

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'primary': '#0f0f0f',      // Dark background
  'secondary': '#1a1a1a',    // Slightly lighter
  'accent': '#ff6b6b',       // Red accent
  'light': '#e0e0e0',        // Light text
}
```

### Typography
- Base font: Inter
- Mono font: JetBrains Mono
- Edit in `tailwind.config.js` or global CSS

### Animation Speeds
- Modify `duration` in component animations
- Adjust easing curves: `ease [0.32, 0.72, 0, 1]`
- Change Spring animations: `damping` and `stiffness`

### Component Content
- Update service items in `WhatIDo.jsx`
- Modify skills in `Skills.jsx`
- Change projects in `Projects.jsx`
- Update contact info in `Contact.jsx`

## 💡 Key Animation Patterns

### Text Reveal
```javascript
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}
```

### Staggered Children
```javascript
containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
}
```

### Spring Physics
```javascript
transition={{
  type: 'spring',
  damping: 20,
  stiffness: 200,
  mass: 0.5,
}}
```

## 📊 Performance Considerations

- Custom cursor uses RequestAnimationFrame internally
- Intersection Observer for efficient scroll detection
- CSS transforms for GPU acceleration
- Framer Motion optimizes re-renders
- Lazy loading-ready component structure

## 🐛 Troubleshooting

### Cursor not showing
- Check that `user-select: none` is applied to interactive elements
- Verify `pointer-events: none` on cursor div
- Ensure JavaScript is enabled

### Animations not triggering
- Check Intersection Observer browser support (99%+ compatibility)
- Verify elements have sufficient height for viewport
- Check browser console for errors

### Performance issues
- Reduce trail points in CustomCursor.jsx
- Disable parallax on mobile devices
- Optimize images and assets
- Use production build for tests

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy 'build' folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 License

This project is open source and available under the MIT License.

## 🙌 Credits

Inspired by creative studio designs and modern web motion principles. Built with React, Framer Motion, and Tailwind CSS.

---

**Happy coding! 🎨✨**

For questions or improvements, feel free to fork and contribute!

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
