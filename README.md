# Edi Meer | Virtual Assistant Portfolio

Personal portfolio site for my virtual assistant services: general admin, AI automation, and technical and web support.

**Live site:** https://edimeer.github.io/va-portfolio/

## About

I'm a virtual assistant with a 7+ year background as a software engineer. This site shows what I offer, the tools I work with, and how to get in touch. I'm available Monday to Friday, 4 to 6 hours a day.

## Features

- Single-page, responsive layout (mobile to desktop)
- Light and dark mode with a toggle that remembers your choice
- Sections for about, services, example tasks, work samples, tools, process, background, availability and FAQ
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
├── .github/workflows/    # Deploy to GitHub Pages
├── index.html            # All page content
├── src/input.css         # Tailwind entry file and custom components
├── tailwind.config.js    # Theme, fonts, colours, animations
├── assets/
│   ├── styles.css        # Compiled CSS (rebuilt by CI on deploy)
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
- **After changing classes:** run `npm run build` (or keep `npm run dev` running) to see them locally. CI rebuilds the CSS on deploy.

## Deploy

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the CSS and deploys to GitHub Pages on every push to `main`. The site updates within a minute or two; progress shows in the repo's **Actions** tab.

```bash
git add -A && git commit -m "Update site" && git push
```

One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.

## Credits

Tool and brand logos belong to their respective owners and are shown only to indicate the tools I work with. Logo sources: [Devicon](https://devicon.dev/), [Simple Icons](https://simpleicons.org/) and [selfh.st/icons](https://selfh.st/icons/) (Microsoft Copilot).

## License

Copyright © 2026 Edi Meer. All rights reserved.

The content, text and design of this site may not be copied, modified or redistributed without written permission. Third-party logos remain the property of their respective owners (see Credits).

## Contact

Email: edison.cmeer@gmail.com · [LinkedIn](https://www.linkedin.com/in/edi-meer)
