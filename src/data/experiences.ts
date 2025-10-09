export interface Experience {
  id: string;
  role: {
    fr: string;
    en: string;
  };
  company: {
    fr: string;
    en: string;
  };
  logo?: string;
  period: {
    fr: string;
    en: string;
  };
  description: {
    fr: string[];
    en: string[];
  };
}

export const experiences: Experience[] = [
  {
    id: "1",
    role: {
      fr: "Ingénieur Logiciel - PAMOA",
      en: "Software Engineer - PAMOA"
    },
    company: {
      fr: "Crédit Mutuel Leasing • Nantes",
      en: "Crédit Mutuel Leasing • Nantes"
    },
    logo: "/images/companies/cml.jpeg",
    period: {
      fr: "Août 2025 - CDD 1 mois",
      en: "August 2025 - 1 month contract"
    },
    description: {
      fr: [
        "Poursuite du développement de l'application web PAMOA avec intégration de nouvelles fonctionnalités stratégiques",
        "Gestion multi-projets pour centraliser et superviser simultanément plusieurs programmes",
        "Gestion des profils, permissions et authentification pour sécuriser l'accès",
        "Projection sur l'avancement des projets avec indicateurs prévisionnels",
        "Capacity planning dédié au pilotage pour optimiser l'allocation des ressources"
      ],
      en: [
        "Continued development of PAMOA web application with integration of new strategic features",
        "Multi-project management to centralize and supervise multiple programs simultaneously",
        "Profile, permissions and authentication management to secure access",
        "Project progress projection with predictive indicators",
        "Capacity planning dedicated to steering to optimize resource allocation"
      ]
    }
  },
  {
    id: "2",
    role: {
      fr: "Assistant Pédagogique",
      en: "Teaching Assistant"
    },
    company: {
      fr: "Epitech Nantes • Nantes",
      en: "Epitech Nantes • Nantes"
    },
    logo: "/images/companies/epitech.jpeg",
    period: {
      fr: "Fév 2025 - Mars 2026",
      en: "Feb 2025 - Mar 2026"
    },
    description: {
      fr: [
        "Encadrement et accompagnement d'étudiants en informatique dans leurs projets",
        "Suivi technique et méthodologique des projets étudiants",
        "Organisation d'ateliers et sessions de formation",
        "Support pédagogique et conseil aux étudiants"
      ],
      en: [
        "Mentoring and support of computer science students in their projects",
        "Technical and methodological monitoring of student projects",
        "Organization of workshops and training sessions",
        "Educational support and student counseling"
      ]
    }
  },
  {
    id: "3",
    role: {
      fr: "Ingénieur Logiciel - PAMOA",
      en: "Software Engineer - PAMOA"
    },
    company: {
      fr: "Crédit Mutuel Leasing • Nantes",
      en: "Crédit Mutuel Leasing • Nantes"
    },
    logo: "/images/companies/cml.jpeg",
    period: {
      fr: "Août 2024 - Déc 2024",
      en: "Aug 2024 - Dec 2024"
    },
    description: {
      fr: [
        "Conception, développement et mise en production d'une application web de pilotage de projet (Angular, .NET 8, Oracle 12c)",
        "Analyse des besoins, conception UX/UI, développement full stack",
        "Migration et sécurisation des données, automatisation des indicateurs clés",
        "Création de tableaux de bord dynamiques et rapports PDF/Excel interactifs",
        "Formation des utilisateurs et présentation des livrables à la Direction",
        "Gain de temps estimé à plus de 30% pour l'équipe pilotage"
      ],
      en: [
        "Design, development and production deployment of a project management web application (Angular, .NET 8, Oracle 12c)",
        "Requirements analysis, UX/UI design, full stack development",
        "Data migration and security, key performance indicators automation",
        "Creation of dynamic dashboards and interactive PDF/Excel reports",
        "User training and deliverables presentation to Management",
        "Estimated time savings of over 30% for the steering team"
      ]
    }
  },
  {
    id: "4",
    role: {
      fr: "Employé Polyvalent",
      en: "Store Employee"
    },
    company: {
      fr: "Action • Nantes",
      en: "Action • Nantes"
    },
    logo: "/images/companies/action.jpeg",
    period: {
      fr: "Juin 2022 - Août 2023",
      en: "Jun 2022 - Aug 2023"
    },
    description: {
      fr: [
        "Mise en rayon, gestion des stocks, encaissement",
        "Traitement des retours, réorganisation des rayons",
        "Suivi de la casse et management d'une petite équipe sur le terrain"
      ],
      en: [
        "Shelving, inventory management, checkout operations",
        "Returns processing, shelf reorganization",
        "Breakage monitoring and small team management on the floor"
      ]
    }
  }
];
