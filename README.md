# 🚀 Premium React Portfolio & Case Studies

A modern, visually stunning, and highly responsive personal portfolio website showcasing web applications, mobile app concepts, and data analytics case studies. Built using **React**, **Vite**, and customized **Vanilla CSS**.

🔗 **Live Deployment Link:** [https://real-portfolio-azure.vercel.app/](https://real-portfolio-azure.vercel.app/)

---

## ✨ Design Aesthetics & Features

- **Rich Visual Aesthetics**: Modern dark and light themes, glassmorphism cards (`backdrop-filter` blur effects), neon accents, and soft drop shadows.
- **Dynamic Theme Switcher**: Automatically inherits system preferences (`prefers-color-scheme`) and supports explicit toggling via a floating header switch with local storage persistence.
- **Custom Page-Specific Animations**: Lightweight, compositor-friendly keyframe animations (float effects, smooth fade-ins, and typing headers).
- **Responsive Layouts**: Dynamic layout grids utilizing CSS container structures and viewport units (`dvh` / `dvw`) that adapt perfectly from coarse touchscreens to ultra-wide desktop monitors.
- **Accessibility & Focus Visibility**: Standard-compliant `:focus-visible` focus rings, semantic tags, and prefers-reduced-motion CSS media rules.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler / Build Tool**: [Vite 8](https://vite.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/) (combined with custom optimized inline SVG brand icons)
- **Styling**: Vanilla CSS (CSS variables, design tokens, `@keyframes`, custom scrollbars)

---

## 📁 Project Structure

```text
portfolio/
├── src/
│   ├── assets/            # Project showcase thumbnails & media assets
│   ├── components/
│   │   ├── Navbar.jsx     # Floating glassmorphic header navigation
│   │   ├── Navbar.css     # Navbar layout & transitions
│   │   ├── Footer.jsx     # Social links & copyright
│   │   ├── Footer.css     # Footer styling
│   │   ├── ProjectCard.jsx# Interactive project card component
│   │   └── ProjectCard.css# Hover scale & overlay transitions
│   ├── pages/
│   │   ├── Home.jsx       # Hero area, typing effect, call to actions
│   │   ├── Home.css       # Floating glow blobs & hero grids
│   │   ├── About.jsx      # Skills matrix & education timeline
│   │   ├── About.css      # Alternating timeline nodes & progress bars
│   │   ├── Projects.jsx   # Project showcase grid & details modal
│   │   ├── Projects.css   # Filter buttons & popup overlay styles
│   │   ├── Contact.jsx    # Form inputs & validation state handlers
│   │   └── Contact.css    # Radar locator & invalid input outlines
│   ├── App.jsx            # Routing and global theme context
│   ├── index.css          # Design system variables, tokens, & resets
│   └── main.jsx           # Application entrypoint
├── index.html             # Main HTML page wrapper
├── package.json           # Project dependencies & scripts
└── README.md              # Documentation
```

---

## 📖 Portfolio Sections

### 1. Home Page
- Dynamic introduction to **Yash Kumar Goyal** with an interactive typing subtitle.
- Abstract neon developer workstation background graphic.
- Quick navigation CTAs pointing to showcase work and contacts.

### 2. About Me
- Detailed career philosophy card.
- **Technical Expertise Matrix**: Responsive skill progress meters including Data Structures & Algorithms (DSA), Java, Python, React, Data Science (NumPy & Pandas), and Data Visualization (Matplotlib & Seaborn).
- **Professional Journey**: Alternating vertical education timeline highlights for:
  - **Scaler School of Technology** (Bachelor's of Computer Science, `2025 - 2029`)
  - **IIT Madras (IITM)** (BS Degree in Data Science, `2025 - Present`)

### 3. Showcase Projects
- Interactive tag filter bar (All, Web Apps, Mobile Apps, Data Analytics Case Studies).
- Pop-up modal details view for each project showing tech tags, deep description, and repository anchors.
- Highlighted items:
  1. **Classic Snake Game** (Web App) - Vanilla canvas implementation.
  2. **Smart Expense Tracker** (Web App) - Budgeting React app with local storage persistence.
  3. **Video Tube App** (Mobile App) - Video platform mockup interface.
  4. **Netflix Viewership Study** (Data Analytics Case Study) - Analysis on user watch-times & retention factors.
  5. **Apple Sales Performance Study** (Data Analytics Case Study) - Quarterly sales performance trends.
  6. **Walmart Supply Chain Study** (Data Analytics Case Study) - Logistical inventory flow mapping.

### 4. Contact
- Interactive glassmorphic form panel.
- Native CSS `:user-invalid` styling that highlights validation errors only after user interaction.
- Live submission simulator that loads and prompts a clean checklist confirmation check.
- Personal location detail (Bengaluru, Karnataka) and direct mail triggers (`goyalyash317@gmail.com`).

---

## 🚀 Local Development Setup

To run this project on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Clone the repository and navigate to the directory
```bash
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the local development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```
The compiled static assets will be located in the `dist/` directory, ready to be hosted.
