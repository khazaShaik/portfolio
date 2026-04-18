# Khaza Shaik — Portfolio

Personal portfolio site built with **Vite + React + Tailwind CSS + Framer Motion**.

Single-page app with smooth-scroll navigation, dark/light theme, and scroll-triggered animations.

## Tech Stack

- **React 18** — UI library
- **Vite 6** — build tool & dev server
- **Tailwind CSS 3** — styling (class-based dark mode)
- **Framer Motion 11** — animations
- **react-scroll** — smooth in-page navigation
- **react-icons** — icon set
- **@emailjs/browser** — contact form (optional, configure keys)

## Getting Started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to dist/
npm run preview   # preview production build
```

## Project Structure

```
portfolio/
├── public/
│   └── resume.pdf              ← replace with your resume
├── src/
│   ├── components/             ← 9 section components
│   ├── data/                   ← content lives here (projects, skills, experience, certs)
│   ├── hooks/                  ← useDarkMode, useReducedMotion
│   ├── utils/                  ← getYearsOfExperience (auto-updates)
│   ├── styles/index.css        ← Tailwind + component classes
│   ├── App.jsx
│   └── main.jsx
├── index.html                  ← SEO meta, JSON-LD Person schema
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Customization

All content is data-driven. Edit these files to update your portfolio:

| File | What to edit |
|---|---|
| `src/data/projects.js` | Your projects |
| `src/data/skills.js` | Your skills, grouped by category |
| `src/data/experience.js` | Your work history |
| `src/data/certifications.js` | Your certifications |
| `src/utils/experience.js` | `CAREER_START` date (drives auto-calculated years) |
| `src/components/Hero.jsx` | Name, tagline, social URLs |
| `src/components/Contact.jsx` | Contact info (email, phone, LinkedIn) |
| `index.html` | SEO meta, JSON-LD |

## EmailJS Setup (Contact Form)

1. Create a free account at https://www.emailjs.com
2. Create a Service + Template
3. Create `.env.local` with:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. The Contact form picks these up automatically.

## Features

- Dark / light theme with `localStorage` persistence + system preference
- Smooth-scroll section navigation with active-link spy
- Mobile hamburger menu with focus/scroll-lock
- Scroll-triggered fade-in animations (respects `prefers-reduced-motion`)
- Top scroll-progress bar
- Scroll-to-top floating button
- Rotating role tagline in Hero
- Project filter by tech-stack tag
- Copy-email-to-clipboard button in Contact
- Client-side contact form validation
- Dynamic years-of-experience (updates automatically)
- SEO-ready: Open Graph, Twitter Card, JSON-LD Person schema
- Skip-to-content link for keyboard users

## Deployment

Any static host works. Recommended:

- **Vercel**: `vercel` (zero config)
- **Netlify**: drag-and-drop the `dist/` folder
- **GitHub Pages**: build, push `dist/` to `gh-pages` branch

Build once with `npm run build`, then deploy the `dist/` folder.

## License

MIT © Khaza Shaik
