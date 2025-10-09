export interface Project {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: {
      fr: "PAMOA - Pilotage et Assistance à la Maîtrise d'Ouvrage",
      en: "PAMOA - Project Management & Steering Assistance"
    },
    description: {
      fr: "Application web full stack de pilotage de projet pour le Crédit Mutuel Alliance Fédérale. Centralisation du suivi des Expressions de Besoin, Spécifications Fonctionnelles et Qualifications pour le projet stratégique ULIS (+150 000 jours-hommes). Gain de temps de +30% pour l'équipe pilotage.",
      en: "Full stack web application for project management for Crédit Mutuel Alliance Fédérale. Centralization of tracking Requirements, Functional Specifications and Qualifications for the strategic ULIS project (+150,000 man-days). Time savings of +30% for the steering team."
    },
    technologies: ["Angular", ".NET 8", "C#", "Oracle 12c", "PrimeNG", "IIS"],
    featured: true,
  },
  {
    id: "2",
    title: {
      fr: "Portfolio Personnel",
      en: "Personal Portfolio"
    },
    description: {
      fr: "Portfolio personnel bilingue (FR/EN) développé avec Next.js 15, React 19, TypeScript et Tailwind CSS. Design moderne et responsive avec animations fluides et système de traduction dynamique.",
      en: "Bilingual personal portfolio (FR/EN) developed with Next.js 15, React 19, TypeScript and Tailwind CSS. Modern and responsive design with smooth animations and dynamic translation system."
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/SamTess/Portfolio",
    link: "https://samtess.github.io",
    featured: false,
  },

  {
    id: "3",
    title: {
      fr: "Raytracer",
      en: "Raytracer"
    },
    description: {
      fr: "Moteur de rendu par lancer de rayons en C++ générant des images PPM. Scènes configurables (caméra, primitives, lumières) avec parsing via libconfig++ et affichage possible via SFML.",
      en: "C++ ray tracing renderer generating PPM images. Configurable scenes (camera, primitives, lights) parsed with libconfig++ and optional display using SFML."
    },
    technologies: ["C++", "libconfig++", "SFML 2.5", "Makefile/CMake", "PPM"],
    github: "https://github.com/SamTess/Raytracer",
    featured: false,
  },
  {
    id: "4",
    title: {
      fr: "Zappy",
      en: "Zappy"
    },
    description: {
      fr: "Jeu réseau multi-joueurs avec serveur en C (sockets TCP, poll), client graphique en C++ et client IA autonome. Monde en grille torique, gestion de ressources et rituels d’élévation.",
      en: "Multiplayer network game with a C server (TCP sockets, poll), C++ graphical client, and autonomous AI client. Toroidal grid world with resources and elevation rituals."
    },
    technologies: ["C (server)", "C++ (GUI)", "TCP/IP", "Sockets", "poll"],
    github: "https://github.com/SamTess/Zappy",
    featured: false,
  },
  {
    id: "5",
    title: {
      fr: "AREA — Action • REAction",
      en: "AREA — Action • REAction"
    },
    description: {
      fr: "Plateforme type IFTTT/Zapier : serveur d’application exposant une API REST, client web et client mobile. Authentification (OAuth2/MDP), hooks pour lier Actions et REActions, orchestration via Docker Compose.",
      en: "IFTTT/Zapier-like platform: application server exposing a REST API, web client and mobile client. Authentication (OAuth2/password), hooks linking Actions to REActions, orchestrated with Docker Compose."
    },
    technologies: ["REST API", "OAuth2", "Docker Compose", "NextJS", "Java 21", "Spring Boot", "React Native"],
    github: "https://github.com/SamTess/AREA",
    featured: false,
  },
];
