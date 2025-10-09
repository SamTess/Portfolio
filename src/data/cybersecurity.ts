export interface Certification {
  id: string;
  name: {
    fr: string;
    en: string;
  };
  issuer: string;
  date: string;
  credential?: string;
  description: {
    fr: string;
    en: string;
  };
}

export interface Walkthrough {
  id: string;
  title: string;
  platform: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Insane";
  date: string;
  tags: string[];
  description: {
    fr: string;
    en: string;
  };
  mdFile?: {
    fr: string;
    en: string;
  };
  writeupUrl?: string;
  featured?: boolean;
}

export interface CyberSkill {
  category: {
    fr: string;
    en: string;
  };
  skills: string[];
}

export const certifications: Certification[] = [
];

export const walkthroughs: Walkthrough[] = [
  {
    id: "example-machine",
    title: "Example Machine",
    platform: "HackTheBox",
    difficulty: "Medium",
    date: "2025-01",
    tags: ["Web", "Linux", "Privilege Escalation"],
    description: {
      fr: "Machine d'exemple démontrant SQL Injection et élévation de privilèges via SUID",
      en: "Example machine demonstrating SQL Injection and privilege escalation via SUID"
    },
    mdFile: {
      fr: "example-machine-fr.md",
      en: "example-machine-en.md"
    },
    featured: true
  },
];

export const cyberSkills: CyberSkill[] = [
  {
    category: {
      fr: "Sécurité Web",
      en: "Web Security"
    },
    skills: [
      "SQL Injection",
      "XSS (Cross-Site Scripting)",
      "CSRF",
      "Authentication Bypass",
      "Directory Traversal",
      "File Upload Vulnerabilities",
      "OWASP Top 10"
    ]
  },
  {
    category: {
      fr: "Linux",
      en: "Linux"
    },
    skills: [
      "Linux Fundamentals",
      "Bash Scripting",
      "Privilege Escalation",
      "File Permissions",
      "Service Enumeration",
      "Log Analysis"
    ]
  },
  {
    category: {
      fr: "Active Directory & Windows",
      en: "Active Directory & Windows"
    },
    skills: [
      "Active Directory Basics",
      "Windows Privilege Escalation",
      "PowerShell",
      "Group Policy",
      "Kerberos",
      "NTLM"
    ]
  },
  {
    category: {
      fr: "Outils & Plateformes",
      en: "Tools & Platforms"
    },
    skills: [
      "Burp Suite",
      "Nmap",
      "Metasploit",
      "HackTheBox",
      "Kali Linux",
      "Wireshark"
    ]
  }
];
