# Edi Meer | Virtual Assistant Portfolio

Personal portfolio site for my virtual assistant services: general admin, AI automation, and technical and web support.

**Live site:** https://edimeer.github.io/va-portfolio/

## About

I'm a virtual assistant with a 7+ year background as a software engineer. This site shows what I offer, the tools I work with, and how to get in touch. I'm available part-time and open to full-time roles.

## Features

- Single-page, responsive layout (mobile to desktop)
- Light and dark mode with a toggle that remembers your choice
- Sections for services, example tasks, tools, background, process, availability and FAQ
- Tool logos stored locally, with no third-party CDN for images
- Scroll animations that respect `prefers-reduced-motion`
- No frameworks or runtime JavaScript dependencies

## Built with

- HTML
- [Tailwind CSS](https://tailwindcss.com/) v3 (compiled with the Tailwind CLI)
- Vanilla JavaScript for the theme toggle, mobile menu and scroll reveal
- Hosted on GitHub Pages

## Project structure

```
va-portfolio/
├── index.html            # All page content
├── src/input.css         # Tailwind entry file and custom components
├── tailwind.config.js    # Theme, fonts, colours, animations
├── assets/
│   ├── styles.css        # Compiled CSS (committed so Pages needs no build)
│   ├── main.js           # Theme toggle, menu, scroll reveal
│   └── logos/            # Tool logos (SVG)
└── package.json
```

## Run locally

Requires [Node.js](https://nodejs.org/) and Python 3 (or any static file server).

```bash
npm install
npm run dev          # rebuilds CSS on every change
```

In a second terminal:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Make changes

- **Content:** edit `index.html`.
- **Styles:** use Tailwind classes in the HTML, or add shared components in `src/input.css`.
- **After changing classes:** run `npm run build` to regenerate `assets/styles.css`, then commit it.

## Deploy

The site is served from the `main` branch root by GitHub Pages. Push to `main` and the site updates within a minute or two.

```bash
npm run build
git add -A && git commit -m "Update site" && git push
```

## Credits

Tool and brand logos belong to their respective owners and are shown only to indicate the tools I work with. Logo sources: [Devicon](https://devicon.dev/) and [Simple Icons](https://simpleicons.org/).

## License

Copyright © 2026 Edi Meer. All rights reserved.

The content, text and design of this site may not be copied, modified or redistributed without written permission. Third-party logos remain the property of their respective owners (see Credits).

## Contact

Email: edison.cmeer@gmail.com · [LinkedIn](https://www.linkedin.com/in/edi-meer)
