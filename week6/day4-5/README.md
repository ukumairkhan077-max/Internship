# Umair Khan — Developer Portfolio

A React + Vite portfolio built with react-router-dom for routing, Context API
for global dark/light theming, and Tailwind CSS v4 for styling.

## Structure
- `src/components/Layout.jsx` — persistent Navbar + Footer wrapping all routes via `<Outlet />`
- `src/components/Navbar.jsx`, `Footer.jsx` — shared chrome
- `src/components/ProjectCard.jsx` — reusable card mapped from `src/data/projects.js`
- `src/components/CodeWindow.jsx` — hero signature element
- `src/components/Reveal.jsx` — scroll-reveal wrapper (IntersectionObserver)
- `src/context/ThemeContext.jsx` — global dark/light mode via Context API
- `src/data/projects.js` — mock JSON array of projects (edit this to add/change projects)
- `src/pages/` — Home, About, Projects, ProjectDetail, Contact, NotFound

## Run locally
```
npm install
npm run dev
```

## Build
```
npm run build
```
Outputs to `dist/`. Deploy `dist/` to Vercel, Netlify, or GitHub Pages.

## Customize
- Replace placeholder email/socials in `src/pages/Contact.jsx` and `src/components/Footer.jsx`.
- Update `src/data/projects.js` with real links (`liveUrl`, `codeUrl`).
- Wire the contact form to EmailJS in `src/pages/Contact.jsx` (`handleSubmit`) — the spot is commented.
- Project screenshots live in `public/images/`.
