<div align="center">

  <h1>Kyla's Portfolio</h1>

  <p>A personal space showcasing my projects, thoughts, and more.</p>

  <p>
    <a href="https://kylareambonanza.vercel.app"><strong>Visit Live Site »</strong></a>
  </p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
  </p>

  <br />

  <a href="https://kylareambonanza.vercel.app">
    <img 
      width="1000" 
      alt="Portfolio Preview" 
      src="https://github.com/user-attachments/assets/2aea7a49-a444-4c90-ad00-a01a59da36dc" 
      style="border-radius: 10px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);"
    />
  </a>

</div>

---

## Overview

Welcome to my portfolio! Built with the **Next.js App Router**, this project acts as a digital home for my academic research in computer vision, full-stack software applications, and design experiments.

### Highlights
- **Fast & Modern Stack:** Next.js with React 19, TypeScript, and Tailwind CSS.
- **Responsive Layout:** Tailored layouts for portrait mobile, tablet, and desktop viewports.
- **Interactive UI:** Smooth transitions, dynamic globe visualization (`cobe`), and theme-aware styling.
- **Direct Deliverables:** Includes integrated resume routing and dedicated project case studies.


---

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js** >= 18.x
- **npm** >= 9.x
- **Git**

### Installation & Setup

## Development

To run this project locally, you need to set up the development environment.


### Setup

1. Clone the repository:

```bash
git clone https://github.com/kay-16/my-portfolio.git
```

2. Navigate to the project directory:

```bash
cd my-portfolio
```

3. Install dependencies using npm:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev       # To run the development server
```

## Project Structure

```
kyla-project-portfolio/
├── .vscode/               # Recommended editor configurations
├── app/                   # Next.js App Router structure
│   ├── about/             # About page route
│   │   └── page.tsx
│   ├── components/        # UI components (Globe, Navbar, FadeIn, etc.)
│   │   ├── fade-in.tsx
│   │   ├── footer.tsx
│   │   ├── globe.tsx
│   │   ├── mdx.tsx
│   │   ├── nav.tsx
│   │   ├── posts.tsx
│   │   ├── progress-bar.tsx
│   │   └── table-of-contents.tsx
│   ├── og/                # Dynamic Open Graph preview generation
│   │   └── route.tsx
│   ├── projects/          # Projects dynamic route & MDX posts
│   │   ├── [slug]/
│   │   ├── posts/
│   │   └── page.tsx
│   ├── global.css         # Global styles & Tailwind directives
│   ├── layout.tsx         # Root layout, fonts, and metadata
│   ├── not-found.tsx      # Custom 404 page
│   ├── page.tsx           # Home / hero landing page
│   ├── robots.ts          # Search crawler directives
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── utils.ts           # Shared utility helpers
├── lib/                   # Data sources & helper modules
│   └── projects.ts        # Project metadata records
├── public/                # Static assets served from root
│   ├── images/            # Graphics and project screenshots
│   └── reambonanza_cv.pdf # Downloadable resume PDF
├── .gitignore
├── next-env.d.ts
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```


### Available Scripts

```bash
# Development
npm run dev      # Start development server on localhost:3000

# Build & Production
npm run build    # Build optimized production bundle
npm run start    # Start production server locally


# Code Quality
npm run lint     # Run Next.js ESLint checks

```

To view the site, it will be available at the following URLs:

| Service          | URL              |
| ---------------- | ---------------- |
| Portfolio App    | `localhost:3000` |
| Production URL   | `https://kylareambonanza.vercel.app/` |


### Deployment

This site is deployed continuously to Vercel on push to the 'main' branch


## Credits

Special thanks to:
- Globe - from [github-nelsonlai.dev](https://github.com/nelsonlaidev/nelsonlai.dev)

The following projects were referenced for inspiration:

- [nelsonlai.dev](https://nelsonlai.dev/)
- [leerob.io](https://leerob.io/)
- [nerdfish.be](https://www.nerdfish.be/)
- [cand.site](https://www.cand.site/)
- [nextra.site](https://nextra.site/)
- [ped.ro](https://ped.ro/)
- [delba.dev](https://delba.dev/)
- [zenorocha.com](https://zenorocha.com/)
- [jahir.dev](https://jahir.dev/)
- [nikolovlazar.com](https://nikolovlazar.com/)
- [bentogrids.com](https://bentogrids.com/)


## Author

- [Kyla Reambonanza](https://github.com/kay-16)

---



<p align="center">
Made with ❤️ in the Philippines
</p> 
