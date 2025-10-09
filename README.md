# 🎨 Portfolio Moderne - Samuel Tesson

> Portfolio personnel multilingue développé avec Next.js 15, React 19, TypeScript et Tailwind CSS

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)

## 🚀 Démarrage Rapide

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) 🎉

## ✨ Fonctionnalités

### 🎯 Principales
- ✅ Design moderne et professionnel avec animations fluides
- ✅ 100% Responsive (mobile, tablet, desktop)
- ✅ Mode sombre/clair automatique
- ✅ **Multilingue (FR/EN)** avec changement dynamique
- ✅ Navigation sticky avec scroll smooth
- ✅ SEO optimisé

### 📄 Sections
- ✅ **Hero** - Présentation avec lien caché vers la cybersécurité
- ✅ **À propos** - Description personnelle
- ✅ **Compétences** - Frontend, Backend, Outils (onglets)
- ✅ **Expérience** - Avec logos d'entreprises
- ✅ **Formation** - Avec logos d'écoles
- ✅ **Projets** - Système extensible avec filtres
- ✅ **Contact** - Liens sociaux et email
- ✅ **Cybersécurité** - Section dédiée avec walkthroughs HTB (easter egg)

### 🎨 Design
- ✅ Logos d'entreprises et d'écoles dans les cartes
- ✅ Badges et tags pour les technologies
- ✅ Animations Framer Motion
- ✅ Composants shadcn/ui
- ✅ Icons Lucide React

### 🔐 Easter Eggs
- ✅ Lien caché "Cybersecurity" dans le titre Hero
- ✅ Section cybersécurité accessible via `/cybersecurity`
- ✅ Système de walkthroughs HackTheBox

## 🎯 Personnalisation Rapide

### 1. Informations Personnelles
Fichier : `src/data/translations.ts`
```typescript
hero: {
  greeting: "Salut, je suis",
  // Modifier les traductions
}
```

### 2. Ajouter des Projets
Fichier : `src/data/projects.ts`
```typescript
{
  id: "mon-projet",
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

### 3. Ajouter des Expériences
Fichier : `src/data/experiences.ts`
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

### 4. Ajouter des Formations
Fichier : `src/data/education.ts`
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

### 5. Ajouter des Logos
Placez vos logos dans `/public/images/companies/`
- Format : PNG ou JPEG
- Taille recommandée : 60x60px minimum
- Consultez [GUIDE_LOGOS_FORMATION.md](./GUIDE_LOGOS_FORMATION.md)

### 6. Remplacer le CV
Remplacez `public/cv.pdf` par votre CV

## 🛠️ Technologies

### Core
- **Framework** : Next.js 15 (App Router)
- **UI Library** : React 19
- **Language** : TypeScript 5
- **Styling** : Tailwind CSS 4

### UI & Animations
- **Components** : shadcn/ui (Radix UI)
- **Animations** : Framer Motion 12
- **Icons** : Lucide React

### Fonctionnalités
- **i18n** : Système custom multilingue (FR/EN)
- **Markdown** : Support des walkthroughs HTB
- **Images** : Next.js Image avec optimisation

## 📁 Structure du Projet

```
portfolio/
├── public/
│   ├── cv.pdf                      # Votre CV
│   ├── images/
│   │   └── companies/              # Logos des entreprises/écoles
│   │       ├── action.jpeg
│   │       ├── cml.jpeg
│   │       ├── epitech.jpeg
│   │       ├── ionis.png          # À ajouter
│   │       └── universite-nantes.png # À ajouter
│   └── walkthroughs/               # Fichiers Markdown HTB
│       └── *.md
├── src/
│   ├── app/
│   │   ├── page.tsx               # Page d'accueil
│   │   ├── layout.tsx             # Layout global
│   │   ├── globals.css            # Styles globaux
│   │   └── cybersecurity/         # Section cybersécurité
│   │       ├── page.tsx
│   │       └── walkthrough/[id]/
│   ├── components/
│   │   ├── ui/                    # Composants shadcn/ui
│   │   ├── LanguageToggle.tsx     # Toggle FR/EN
│   │   ├── HTBProfileCard.tsx     # Carte profil HTB
│   │   ├── ProjectCard.tsx
│   │   ├── ExperienceCard.tsx
│   │   └── EducationCard.tsx
│   ├── contexts/
│   │   └── LanguageContext.tsx    # Context multilingue
│   ├── data/                      # 📝 DONNÉES À MODIFIER
│   │   ├── translations.ts        # Traductions FR/EN
│   │   ├── projects.ts            # Vos projets
│   │   ├── experiences.ts         # Vos expériences
│   │   ├── education.ts           # Vos formations
│   │   ├── cybersecurity.ts       # Données cyber
│   │   └── walkthroughs-metadata.ts # Métadonnées HTB
│   └── lib/
│       └── utils.ts               # Utilitaires
├── GUIDE_*.md                     # Guides de personnalisation
└── README.md                      # Ce fichier
```

## 🌐 Système Multilingue

Le portfolio supporte le français et l'anglais avec changement dynamique.

### Ajouter une traduction
Fichier : `src/data/translations.ts`

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

Consultez [GUIDE_MULTILINGUE.md](./GUIDE_MULTILINGUE.md) pour plus de détails.

## 🔐 Section Cybersécurité

### Accès
- URL directe : `/cybersecurity`
- Easter egg : Cliquez sur "Cybersecurity" dans le titre Hero

### Fonctionnalités
- ✅ Profil HackTheBox
- ✅ Statistiques et badges
- ✅ Liste des walkthroughs
- ✅ Rendu Markdown des solutions

### Ajouter un walkthrough
1. Créez un fichier `.md` dans `/public/walkthroughs/`
2. Ajoutez les métadonnées dans `/src/data/walkthroughs-metadata.ts`
3. Utilisez le template fourni

Consultez [GUIDE_WALKTHROUGHS_AJOUT.md](./GUIDE_WALKTHROUGHS_AJOUT.md)

## 🚀 Déploiement


### Déploiement Automatique via GitHub Actions

Ce projet utilise un workflow GitHub Actions pour construire et déployer automatiquement la version statique du portfolio sur le dépôt externe [`samtess.github.io`](https://github.com/SamTess/samtess.github.io).

#### Fonctionnement
- À chaque push sur `main`, le workflow :
  - Installe les dépendances
  - Build le projet Next.js
  - Exporte la version statique (`out`)
  - Pousse le dossier exporté sur le dépôt externe `samtess.github.io` (branche `main`)

#### Configuration
1. Ajoutez un secret `TARGET_REPO_TOKEN` dans les paramètres du dépôt, avec un token GitHub ayant accès en écriture au repo cible.
2. Le workflow est défini dans `.github/workflows/deploy-to-external-repo.yml`.

#### Déploiement manuel
Vous pouvez toujours déployer localement :
```bash
npm run build && npm run export
# Le dossier 'out' contient la version statique
```

### Déploiement Vercel (optionnel)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
# Installation CLI
npm i -g vercel

# Déploiement
vercel
```

### Variables d'Environnement

Créez un fichier `.env.local` si nécessaire :
```env
# Exemple
NEXT_PUBLIC_SITE_URL=https://votresite.com
```

## 📝 Scripts Disponibles

```bash
npm run dev      # Mode développement (http://localhost:3000)
npm run build    # Build pour production
npm start        # Serveur production
npm run lint     # Vérifier le code avec ESLint
```

## 🎨 Personnalisation Avancée

### Couleurs et Thème
Fichier : `src/app/globals.css`

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --secondary: 0 0% 96.1%;
  /* Modifiez selon vos préférences */
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  /* Mode sombre */
}
```

### Animations
Les animations sont gérées par Framer Motion. Modifiez-les dans `src/app/page.tsx` :

```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};
```

### Ajouter de Nouvelles Sections
1. Créez le composant dans `src/components/`
2. Importez-le dans `src/app/page.tsx`
3. Ajoutez les traductions dans `src/data/translations.ts`

## 📚 Guides Détaillés

| Guide | Description |
|-------|-------------|
| [START_HERE.md](./START_HERE.md) | Point de départ - Vue d'ensemble |
| [GUIDE_AJOUT_CONTENU.md](./GUIDE_AJOUT_CONTENU.md) | Ajouter projets, expériences, formations |
| [GUIDE_MULTILINGUE.md](./GUIDE_MULTILINGUE.md) | Gérer les traductions FR/EN |
| [GUIDE_LOGOS_FORMATION.md](./GUIDE_LOGOS_FORMATION.md) | Ajouter les logos d'entreprises/écoles |
| [GUIDE_WALKTHROUGHS.md](./GUIDE_WALKTHROUGHS.md) | Système de walkthroughs HTB |
| [GUIDE_CYBERSECURITE.md](./GUIDE_CYBERSECURITE.md) | Section cybersécurité |
| [STRUCTURE.md](./STRUCTURE.md) | Architecture détaillée du projet |

## 🐛 Résolution de Problèmes

### Les images ne s'affichent pas
- Vérifiez que les fichiers sont bien dans `/public/`
- Le chemin doit commencer par `/` (ex: `/images/logo.png`)
- Utilisez le composant `Image` de Next.js

### Les logos ne s'affichent pas
- Vérifiez le nom du fichier (sensible à la casse)
- Assurez-vous que le chemin dans les données correspond au fichier
- Consultez [GUIDE_LOGOS_FORMATION.md](./GUIDE_LOGOS_FORMATION.md)

### Erreur de build
```bash
# Nettoyez le cache
rm -rf .next
npm run build
```

### Le changement de langue ne fonctionne pas
- Vérifiez que toutes les clés existent dans les deux langues
- Consultez [GUIDE_MULTILINGUE.md](./GUIDE_MULTILINGUE.md)

## 🤝 Contribution

Ce portfolio est un projet personnel, mais n'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Créer une issue sur GitHub

## 📧 Contact

- **Email** : samuel.tesson@epitech.eu
- **GitHub** : [@SamTess](https://github.com/SamTess)
- **LinkedIn** : [Samuel Tesson](https://linkedin.com/in/samuel-tesson)
- **Portfolio** : [https://samuel-tesson.com](https://samuel-tesson.com)

## 📄 Licence

Ce projet est libre d'utilisation pour un usage personnel et éducatif.

---

## 🎯 Checklist de Personnalisation

- [ ] Modifier les informations personnelles dans `src/data/translations.ts`
- [ ] Ajouter vos projets dans `src/data/projects.ts`
- [ ] Ajouter vos expériences dans `src/data/experiences.ts`
- [ ] Ajouter vos formations dans `src/data/education.ts`
- [ ] Remplacer `public/cv.pdf` par votre CV
- [ ] Ajouter les logos dans `public/images/companies/`
- [ ] Personnaliser les couleurs dans `src/app/globals.css`
- [ ] Tester le mode responsive
- [ ] Tester le changement de langue FR/EN
- [ ] Déployer sur Vercel

---

**Fait avec ❤️ et ☕ par Samuel Tesson**

Pour commencer, consultez **[START_HERE.md](./START_HERE.md)** ! 🚀
