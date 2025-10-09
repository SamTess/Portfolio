export interface Education {
  id: string;
  degree: {
    fr: string;
    en: string;
  };
  school: {
    fr: string;
    en: string;
  };
  logo?: string;
  period: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
}

export const educationList: Education[] = [
  {
    id: "1",
    degree: {
      fr: "Expert en Technologies de l'Information & Ingénierie Logicielle",
      en: "Expert in Information Technology & Software Engineering"
    },
    school: {
      fr: "Epitech Nantes",
      en: "Epitech Nantes"
    },
    logo: "/images/companies/epitech.jpeg",
    period: {
      fr: "2023 - 2028",
      en: "2023 - 2028"
    },
    description: {
      fr: "Bac +5 / RNCP7 - Formation d'expert en technologies de l'information et ingénierie logicielle",
      en: "Master's degree / RNCP7 - Expert training in information technology and software engineering"
    }
  },
  {
    id: "2",
    degree: {
      fr: "Certificat Teaching & Coaching",
      en: "Teaching & Coaching Certificate"
    },
    school: {
      fr: "Ionis-STM",
      en: "Ionis-STM"
    },
    logo: "/images/companies/ionis.jpeg",
    period: {
      fr: "2024 - 2026",
      en: "2024 - 2026"
    },
    description: {
      fr: "Certification en pédagogie et accompagnement d'étudiants",
      en: "Certification in pedagogy and student mentoring"
    }
  },
  {
    id: "3",
    degree: {
      fr: "Licence de Physique - Mécanique",
      en: "Bachelor's in Physics - Mechanics"
    },
    school: {
      fr: "Université de Nantes",
      en: "University of Nantes"
    },
    logo: "/images/companies/universite-nantes.png",
    period: {
      fr: "2020 - 2023",
      en: "2020 - 2023"
    },
    description: {
      fr: "Formation universitaire en physique avec spécialisation en mécanique",
      en: "University education in physics with specialization in mechanics"
    }
  }
];
