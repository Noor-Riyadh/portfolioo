# 🎨 Noor — UI/UX Designer Portfolio

A modern, high-end personal portfolio website built with React, Tailwind CSS, and Framer Motion. Featuring a dark glassmorphism aesthetic with deep purples and blues, smooth scroll animations, and a fully responsive layout.

## 🌐 Live Demo

[https://portfolioo-iota-one.vercel.app/](https://portfolioo-iota-one.vercel.app/)

---

## ✨ Features

-  Dark glassmorphism theme with purple/blue gradients
-  Scroll-triggered entry animations via Framer Motion
-  Floating 3D-style astronaut illustration in Hero
-  Animated circular skill progress indicators with glow effects
-  Tabbed project filtering (All / Web Dev / Design / Branding)
-  Contact form with live success feedback
-  Newsletter subscription banner
-  Fully responsive across all screen sizes
-  Lightning-fast with Vite build tool

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Vite | 5 | Build tool & dev server |
| Tailwind CSS | 3 | Utility-first styling |
| Framer Motion | 11 | Animations |
| Lucide React | Latest | Icons |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Noor-Riyadh/portfolioo.git

# Navigate into the project
cd portfolioo

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure
src/
├── components/
│   ├── Navbar.jsx       # Fixed navigation with scroll effect
│   ├── Hero.jsx         # Animated hero with illustration
│   ├── Skills.jsx       # Circular progress skill indicators
│   ├── Projects.jsx     # Tabbed project showcase
│   ├── Contact.jsx      # Contact form + newsletter
│   └── Footer.jsx       # Footer with social links
├── hooks/
│   └── useScrollAnimation.js   # Reusable scroll animation hook
├── App.jsx
├── main.jsx
└── index.css            # Global styles + CSS variables

---

## 📸 Sections

| Section | Description |
|---|---|
| **Navbar** | Fixed top nav with glassmorphism scroll effect and mobile menu |
| **Hero** | Bold heading, welcome badge, stats, and floating illustration |
| **Skills** | Six animated circular progress bars with glow on hover |
| **Projects** | Six project cards with tab filtering and hover reveal |
| **Contact** | Info cards, message form, and newsletter signup |
| **Footer** | Minimal footer with social icon links |

---

## 🎨 Design System

- **Primary color:** `#7C3AED` (Violet)
- **Accent color:** `#A855F7` (Purple)
- **Background:** `#06040f` (Deep dark)
- **Fonts:** Syne (display) + DM Sans (body)
- **Style:** Glassmorphism with backdrop blur

---

## 📄 License

MIT © 2026 Noor