export interface WalkthroughMetadata {
  id: string;
  slug: string;
  title: string;
  platform: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Insane";
  date: string;
  tags: string[];
  description: {
    fr: string;
    en: string;
  };
  published: boolean;
  featured?: boolean;
  thumbnail?: string;
}

export const walkthroughsMetadata: WalkthroughMetadata[] = [
  {
    id: "1",
    slug: "example-htb-machine",
    title: "Example HTB Machine",
    platform: "HackTheBox",
    difficulty: "Medium",
    date: "2024-10-09",
    tags: ["Web", "SQL Injection", "Privilege Escalation"],
    description: {
      fr: "Exemple de machine HackTheBox avec exploitation web et escalade de privilèges",
      en: "Example HackTheBox machine with web exploitation and privilege escalation"
    },
    published: false,
    featured: true
  }
];
