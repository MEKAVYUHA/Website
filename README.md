# Mekavyuha Official Website

This is the official website for Mekavyuha, an independent game studio building worlds from chaos. 

## 🚀 Tech Stack

This project is built using modern web development tools and libraries:

### Core Frameworks & Build Tools
- **[React 19](https://react.dev/)**: Frontend UI library.
- **[Vite](https://vitejs.dev/)**: Lightning-fast build tool and development server.
- **[React Router v7](https://reactrouter.com/)**: Client-side routing.

### Styling & UI
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- **clsx & tailwind-merge**: Utilities for conditionally joining and resolving Tailwind class names.
- **[Lucide React](https://lucide.dev/)** & **[React Icons](https://react-icons.github.io/react-icons/)**: Scalable SVG icon libraries.

### Animations & Interactions
- **[GSAP (GreenSock)](https://gsap.com/)**: Professional-grade animation library used for complex scroll-triggered animations.
- **[Framer Motion](https://www.framer.com/motion/)**: React-specific animation library for layout transitions and micro-interactions.
- **[Lenis](https://lenis.darkroom.engineering/)**: Lightweight smooth scrolling library.
- **[SplitType](https://github.com/lukePeavey/SplitType)**: Splits text into words/characters for staggered GSAP text animations.

### Quality Assurance
- **[Oxlint](https://oxc.rs/docs/guide/usage/linter.html)**: Extremely fast JavaScript/TypeScript linter.

## 🛠️ Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

To create an optimized production build:
```bash
npm run build
```
The output will be placed in the `dist` directory.

## 🔒 Security & Environment
- Environment variables should be placed in a `.env` file (e.g., `VITE_WEB3FORMS_ACCESS_KEY` for the contact form).
- See `.env.example` if available.
- Production deployments (like Vercel) are secured via strict Content Security Policies in `vercel.json`.
