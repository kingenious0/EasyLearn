# EasyLearn - Premium Learning Management System

A high-grade, visually stunning Learning Management System (LMS) specifically designed for Ghanaian SHS students and WASSCE candidates.

## 🎯 Project Vision

EasyLearn replaces dated educational tools with a powerful, design-first platform that makes learning feel like a premium experience. Built with a focus on **visual excellence**, **smooth performance**, and **student engagement**.

## 🚀 Features

### Current Implementation (Phase 1 & 2 Complete)
- ✅ **Global Theme System**: Light (default) & Dark modes with persistence.
- ✅ **Theme Switcher**: User-friendly toggle for theme preference.
- ✅ **Responsive Navbar**: With dynamic navigation links and authentication buttons.
- ✅ **Premium Landing Page**: Revitalized with theme-aware components.
  - ✅ **Animated Hero Section**: Adaptive gradients, floating orbs, and glassmorphic badge.
  - ✅ **Interactive Stats Counter**: Animated social proof, theme-aware cards.
  - ✅ **Feature Showcase**: 6 core platform capabilities with dynamic icons and hover effects.
  - ✅ **Call-to-Action Section**: Engaging design with rotating background effect.
- ✅ **Consistent Footer**: Across all pages with quick links and newsletter subscription.
- ✅ **Core Page Routing**: Setup for Home, Courses, Pricing, About Us, Contact, Login, and Sign Up.

### Coming Soon
- ⏳ Student Dashboard with progress visualization
- ⏳ Course Learning Interface with video player
- ⏳ Quiz System with WASSCE-style questions
- ⏳ AI-Powered Learning Insights

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Outfit (Google Fonts)

## 🎨 Design Philosophy

### Aesthetic Standards
- **Glassmorphism**: Translucent backgrounds with blur effects (adapted for themes).
- **Deep Gradients**: Electric Indigo (#6366f1) to Vivid Purple (#a855f7).
- **Premium Typography**: Outfit for headings, Inter for body text.
- **Micro-interactions**: Smooth hover states and transitions.
- **Theme-aware UI**: Components adapt seamlessly between light and dark modes.

### Color Palette (Theme-aware CSS Variables)
```css
/* Light Theme (Default) */
--background-primary: #ffffff;
--background-secondary: #f8faff;
--text-primary: #1a202c;
--text-secondary: #4a5568;
--accent-blue: #4299e1;
--accent-purple: #805ad5;
--border-color: #e2e8f0;
--card-bg: #ffffff;
--card-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

/* Dark Theme (.dark class override) */
--background-primary: #0a0a0a;
--background-secondary: #1a1a1a;
--text-primary: #ededed;
--text-secondary: #a0aec0;
--accent-blue: #63b3ed;
--accent-purple: #b794f4;
--border-color: #2d3748;
--card-bg: #1a1a1a;
--card-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

/* Shared */
--primary-gradient: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
--link-hover: var(--accent-purple); /* Or specific primary */
```

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
```bash
cd easylearn
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
easylearn/
├── app/
│   ├── (auth)/             # Future authentication routes (login, signup)
│   ├── about/
│   │   └── page.tsx        # About Us page
│   ├── contact/
│   │   └── page.tsx        # Contact Us page
│   ├── courses/
│   │   └── page.tsx        # Courses listing page
│   ├── login/
│   │   └── page.tsx        # Login page
│   ├── pricing/
│   │   └── page.tsx        # Pricing page
│   ├── signup/
│   │   └── page.tsx        # Sign Up page
│   ├── globals.css         # Global styles & CSS variables (theme-aware)
│   ├── layout.tsx          # Root layout with ThemeProvider, Navbar, Footer
│   └── page.tsx            # Home page (landing page)
├── components/
│   ├── CTA.tsx             # Call-to-action section
│   ├── CTA.module.css      # CTA styles (theme-aware)
│   ├── Features.tsx        # Feature cards grid
│   ├── Features.module.css # Features styles (theme-aware)
│   ├── Footer.tsx          # Global Footer component
│   ├── Footer.module.css   # Footer styles (theme-aware)
│   ├── Hero.tsx            # Landing hero section
│   ├── Hero.module.css     # Hero styles (theme-aware)
│   ├── Navbar.tsx          # Global Navbar component
│   ├── Navbar.module.css   # Navbar styles (theme-aware)
│   ├── ThemeSwitcher.tsx   # Component to toggle themes
│   └── ThemeSwitcher.module.css # ThemeSwitcher styles
├── context/
│   └── ThemeContext.tsx    # React Context for theme management
├── public/                 # Static assets
└── package.json            # Dependencies
```

## 🎯 Target Audience

- **Primary**: SHS 1-3 students in Ghana
- **Secondary**: Remedial students and private candidates
- **Stakeholders**: Parents and educators

## 📊 Success Metrics

- **Visual Impact**: Immediate "wow" factor on page load in both light and dark themes.
- **Responsiveness**: Perfect rendering from iPhone to 4K monitors.
- **Performance**: 
  - Fast Largest Contentful Paint (LCP)
  - Minimal Cumulative Layout Shift (CLS)
  - Smooth 60fps animations
- **User Experience**: Intuitive theme switching, easy navigation, and engaging content.

## 🗺️ Roadmap

### Phase 1: UI Foundation ✅
- [x] Landing Page Structure
- [x] Hero Section with animations
- [x] Stats Counter component
- [x] Features showcase
- [x] CTA section
- [x] Global theme system
- [x] ThemeSwitcher component
- [x] Global Navbar and Footer

### Phase 2: Page Restructuring & Routing ✅
- [x] Core page routing setup (Courses, Pricing, About, Contact, Login, Signup)
- [x] Basic placeholder pages for all new routes

### Phase 3: Content Refinement & Enhancement (In Progress)
- [x] Revamped `Hero` component for theme-awareness and improved light theme aesthetics.
- [x] Revamped `Stats` component for theme-awareness and improved light theme aesthetics.
- [x] Revamped `Features` component for theme-awareness and improved light theme aesthetics.
- [x] Revamped `CTA` component for theme-awareness and improved light theme aesthetics.
- [ ] Design and implement actual content for `Courses` page.
- [ ] Design and implement actual content for `Pricing` page.
- [ ] Design and implement actual content for `About Us` page.
- [ ] Design and implement actual content for `Contact` page.
- [ ] Implement full authentication UI for `Login` and `Sign Up`.

### Phase 4: Backend Integration
- [ ] API routes setup
- [ ] Database schema
- [ ] User authentication
- [ ] Content management system

## 🎨 Component Highlights (Updated)

### Hero Component
- Massive gradient typography.
- Dynamic floating background orbs with animation, adapting to light/dark themes.
- Glassmorphic badge design.
- Trust indicators with avatars.
- Smooth scroll-in animations.

### Stats Component
- Animated counter with easing.
- Intersection Observer for viewport detection.
- Theme-aware cards with hover effects.
- Responsive grid layout.

### Features Component
- 6 feature cards with unique gradient icons.
- Staggered animation entrance.
- Hover lift effects.
- Icon integration from Lucide React.
- Theme-aware styling.

### CTA Component
- Rotating gradient background, adapted for light/dark themes.
- Sparkle icon animation.
- Dual CTA buttons with theme-aware styling.
- Feature checklist with icons.

### Navbar Component
- Responsive design for desktop and mobile.
- Integrated ThemeSwitcher.
- Animated mobile menu.
- Theme-aware links and buttons.

### Footer Component
- Multi-column layout with quick links and social media.
- Newsletter subscription form.
- Fully theme-aware.

### ThemeSwitcher Component
- Interactive button to toggle between light and dark themes.
- Persists user's theme preference in local storage.
- Visually distinct icons (Sun/Moon) with smooth transitions.

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Development Guidelines

### CSS Modules
- Use CSS Modules for component-specific styles.
- Global utilities and theme variables in `globals.css`.
- Maintain consistent naming conventions.

### Animations
- Use Framer Motion for complex animations.
- CSS transitions for simple hover effects.
- Respect `prefers-reduced-motion` for accessibility.

### Responsive Design
- Mobile-first approach.
- Breakpoints: 768px (tablet), 1024px (desktop).
- Fluid typography with `clamp()`.

## 🤝 Contributing

This is a proprietary educational platform. For collaboration inquiries, please contact the development team.

## 📄 License

Proprietary - All rights reserved

## 👥 Team

Built with ❤️ for Ghanaian students

---

**Version**: 2.0.0 (Theme System & Core Routing Complete)  
**Last Updated**: February 2026
