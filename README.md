# 🎨 Modern Portfolio - Samuel Tesson

> Multilingual personal portfolio built with Next.js 15, React 19, TypeScript and Tailwind CSS

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## ✨ Features

### 🎯 Main Features
- ✅ Modern and professional design with smooth animations
- ✅ 100% Responsive (mobile, tablet, desktop)
- ✅ Automatic dark/light mode
- ✅ **Multilingual (FR/EN)** with dynamic switching
- ✅ Sticky navigation with smooth scroll
- ✅ SEO optimized

### 📄 Sections
- ✅ **Hero** - Introduction with hidden link to cybersecurity
- ✅ **About** - Personal description
- ✅ **Skills** - Frontend, Backend, Tools (tabs)
- ✅ **Experience** - With company logos
- ✅ **Education** - With school logos
- ✅ **Projects** - Extensible system with filters
- ✅ **Contact** - Social links and email
- ✅ **Cybersecurity** - Dedicated section with HTB walkthroughs (easter egg)

### 🎨 Design
- ✅ Company and school logos in cards
- ✅ Badges and tags for technologies
- ✅ Framer Motion animations
- ✅ shadcn/ui components
- ✅ Lucide React icons

### 🔐 Easter Eggs
- ✅ Hidden "Cybersecurity" link in Hero title
- ✅ Cybersecurity section accessible via `/cybersecurity`
- ✅ HackTheBox walkthrough system

## 🎯 Quick Customization

### 1. Personal Information
File: `src/data/translations.ts`
```typescript
hero: {
  greeting: "Hi, I'm",
  // Modify translations
}
```

### 2. Add Projects
File: `src/data/projects.ts`
```typescript
{
  id: "my-project",
  title: {
    fr: "Mon Super Projet",
    en: "My Awesome Project"
  },
  description: {
    fr: "Description en français...",
    en: "English description..."
  },
  technologies: ["React", "Node.js"],
  link: "https://demo.com",
  github: "https://github.com/user/repo",
  featured: true,
}
```

### 3. Add Experience
File: `src/data/experiences.ts`
```typescript
{
  id: "1",
  role: { fr: "Titre FR", en: "Title EN" },
  company: { fr: "Entreprise FR", en: "Company EN" },
  logo: "/images/companies/logo.jpeg",
  period: { fr: "2024 - 2025", en: "2024 - 2025" },
  description: {
    fr: ["Point 1", "Point 2"],
    en: ["Point 1", "Point 2"]
  }
}
```

### 4. Add Education
File: `src/data/education.ts`
```typescript
{
  id: "1",
  degree: { fr: "Diplôme FR", en: "Degree EN" },
  school: { fr: "École FR", en: "School EN" },
  logo: "/images/companies/school.jpeg",
  period: { fr: "2023 - 2028", en: "2023 - 2028" },
  description: {
    fr: "Description...",
    en: "Description..."
  }
}
```

### 5. Add Logos
Place your logos in `/public/images/companies/`
- Format: PNG or JPEG
- Recommended size: 60x60px minimum
- See [GUIDE_LOGOS_FORMATION.md](./GUIDE_LOGOS_FORMATION.md)

### 6. Replace CV
Replace `public/cv.pdf` with your CV

## 🛠️ Technologies

### Core
- **Framework** : Next.js 15 (App Router)
- **UI Library** : React 19
- **Language** : TypeScript 5
- **Styling** : Tailwind CSS 4

### UI & Animations
- **Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion 12
- **Icons**: Lucide React

### Features
- **i18n**: Custom multilingual system (FR/EN)
- **Markdown**: HTB walkthroughs support
- **Images**: Next.js Image with optimization

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── cv.pdf                      # Your CV
│   ├── images/
│   │   └── companies/              # Company/school logos
│   │       ├── action.jpeg
│   │       ├── cml.jpeg
│   │       ├── epitech.jpeg
│   │       ├── ionis.png          # To be added
│   │       └── universite-nantes.png # To be added
│   └── walkthroughs/               # HTB Markdown files
│       └── *.md
├── src/
│   ├── app/
│   │   ├── page.tsx               # Home page
│   │   ├── layout.tsx             # Global layout
│   │   ├── globals.css            # Global styles
│   │   └── cybersecurity/         # Cybersecurity section
│   │       ├── page.tsx
│   │       └── walkthrough/[id]/
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components
│   │   ├── LanguageToggle.tsx     # FR/EN toggle
│   │   ├── HTBProfileCard.tsx     # HTB profile card
│   │   ├── ProjectCard.tsx
│   │   ├── ExperienceCard.tsx
│   │   └── EducationCard.tsx
│   ├── contexts/
│   │   └── LanguageContext.tsx    # Multilingual context
│   ├── data/                      # 📝 DATA TO MODIFY
│   │   ├── translations.ts        # FR/EN translations
│   │   ├── projects.ts            # Your projects
│   │   ├── experiences.ts         # Your experiences
│   │   ├── education.ts           # Your education
│   │   ├── cybersecurity.ts       # Cyber data
│   │   └── walkthroughs-metadata.ts # HTB metadata
│   └── lib/
│       └── utils.ts               # Utilities
├── GUIDE_*.md                     # Customization guides
└── README.md                      # This file
```

## 🌐 Multilingual System

The portfolio supports French and English with dynamic switching.

### Add a translation
File: `src/data/translations.ts`

```typescript
export const translations = {
  fr: {
    nav: {
      about: "À propos",
      // ...
    }
  },
  en: {
    nav: {
      about: "About",
      // ...
    }
  }
}
```

See [GUIDE_MULTILINGUE.md](./GUIDE_MULTILINGUE.md) for more details.

## 🔐 Cybersecurity Section

### Access
- Direct URL: `/cybersecurity`
- Easter egg: Click on "Cybersecurity" in the Hero title

### Features
- ✅ HackTheBox profile
- ✅ Statistics and badges
- ✅ Walkthrough list
- ✅ Markdown rendering of solutions

### Add a walkthrough
1. Create a `.md` file in `/public/walkthroughs/`
2. Add metadata in `/src/data/walkthroughs-metadata.ts`
3. Use the provided template

See [GUIDE_WALKTHROUGHS_AJOUT.md](./GUIDE_WALKTHROUGHS_AJOUT.md)

## 🚀 Deployment


### Automatic Deployment via GitHub Actions

This project uses a GitHub Actions workflow to build and automatically deploy the static version of the portfolio to the external repository [`samtess.github.io`](https://github.com/SamTess/samtess.github.io).

#### How it works
- On each push to `main`, the workflow:
  - Installs dependencies
  - Builds the Next.js project
  - Exports the static version (`out`)
  - Pushes the exported folder to the external repository `samtess.github.io` (`main` branch)

#### Configuration
1. Add a `TARGET_REPO_TOKEN` secret in the repository settings, with a GitHub token that has write access to the target repo.
2. The workflow is defined in `.github/workflows/deploy-to-external-repo.yml`.

#### Manual deployment
You can always deploy locally:
```bash
npm run build && npm run export
# The 'out' folder contains the static version
```

### Vercel Deployment (optional)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
# CLI Installation
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

Create a `.env.local` file if needed:
```env
# Example
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## 📝 Available Scripts

```bash
npm run dev      # Development mode (http://localhost:3000)
npm run build    # Build for production
npm start        # Production server
npm run lint     # Check code with ESLint
```

## 🎨 Advanced Customization

### Colors and Theme
File: `src/app/globals.css`

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --secondary: 0 0% 96.1%;
  /* Modify according to your preferences */
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  /* Dark mode */
}
```

### Animations
Animations are handled by Framer Motion. Modify them in `src/app/page.tsx`:

```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};
```

### Add New Sections
1. Create the component in `src/components/`
2. Import it in `src/app/page.tsx`
3. Add translations in `src/data/translations.ts`

## 🐛 Troubleshooting

### Images not displaying
- Check that files are in `/public/`
- Path must start with `/` (e.g.: `/images/logo.png`)
- Use Next.js `Image` component

### Logos not displaying
- Check file name (case-sensitive)
- Ensure the path in the data matches the file
- See [GUIDE_LOGOS_FORMATION.md](./GUIDE_LOGOS_FORMATION.md)

### Build error
```bash
# Clear cache
rm -rf .next
npm run build
```

### Language switching not working
- Check that all keys exist in both languages
- See [GUIDE_MULTILINGUE.md](./GUIDE_MULTILINGUE.md)

## 🤝 Contributing

This portfolio is a personal project, but feel free to:
- Report bugs
- Suggest improvements
- Create an issue on GitHub

## 📧 Contact

- **Email**: samuel.tesson@epitech.eu
- **GitHub**: [@SamTess](https://github.com/SamTess)
- **LinkedIn**: [Samuel Tesson](https://linkedin.com/in/samuel-tesson)
- **Portfolio**: [https://samuel-tesson.com](https://samuel-tesson.com)

## 📄 License

This project is free to use for personal and educational purposes.

---

**Made with ❤️ and ☕ by Samuel Tesson**

To get started, check out **[START_HERE.md](./START_HERE.md)** ! 🚀
