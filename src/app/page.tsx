"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Briefcase, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";
import { educationList } from "@/data/education";
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { t, language } = useLanguage();
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            >
              ST
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-4 items-center"
            >
              <LanguageToggle />
              <Button variant="ghost" asChild>
                <a href="#about">{t.nav.about}</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#experience">{t.nav.experience}</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#projects">{t.nav.projects}</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#contact">{t.nav.contact}</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <h2 className="text-5xl md:text-7xl font-bold mb-4">
              {t.hero.greeting}{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Samuel Tesson
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {language === 'fr' ? (
                <>
                  Étudiant - Software &{" "}
                  <Link href="/cybersecurity" className="hover:underline hover:text-primary transition-colors cursor-pointer">
                    Cybersecurity
                  </Link>{" "}
                  Engineer
                </>
              ) : (
                <>
                  Student - Software &{" "}
                  <Link href="/cybersecurity" className="hover:underline hover:text-primary transition-colors cursor-pointer">
                    Cybersecurity
                  </Link>{" "}
                  Engineer
                </>
              )}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4 justify-center mb-8">
            <Button asChild size="lg" className="gap-2">
              <a href="/cv.pdf" download>
                <Download className="w-4 h-4" />
                {t.hero.downloadCV}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="#contact">
                <Mail className="w-4 h-4" />
                {t.hero.contactMe}
              </a>
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/SamTess" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/samuel-tesson" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:samuel.tesson@epitech.eu">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">{t.about.title}</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t.about.description1}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.description2}
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20 bg-secondary/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Award className="w-8 h-8" />
            {t.skills.title}
          </h2>

          <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="frontend">{t.skills.frontend}</TabsTrigger>
              <TabsTrigger value="backend">{t.skills.backend}</TabsTrigger>
              <TabsTrigger value="tools">{t.skills.tools}</TabsTrigger>
            </TabsList>

            <TabsContent value="frontend" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {["Angular", "TypeScript", "JavaScript", "HTML", "SCSS", "PrimeNG", "React", "Next.js"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-base py-2 px-4">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="backend" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {[".NET 8", "C#", "C", "C++", "Java 21", "Spring Boot", "Node.js", "Oracle", "MySQL", "SQL Server", "PostgreSQL"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-base py-2 px-4">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tools" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Docker", "Jenkins", "Ansible", "Unix", "IIS", "VS Code", "GitHub", "Visual Studio"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-base py-2 px-4">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Briefcase className="w-8 h-8" />
            {t.experience.title}
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp) => (
              <Card key={exp.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      {exp.logo && (
                        <div className="flex-shrink-0">
                          <Image
                            src={exp.logo}
                            alt={exp.company[language]}
                            width={60}
                            height={60}
                            className="rounded-lg object-contain bg-white p-2"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <CardTitle className="text-2xl">{exp.role[language]}</CardTitle>
                        <CardDescription className="text-base mt-1">{exp.company[language]}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="flex-shrink-0">{exp.period[language]}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.description[language].map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-20 bg-secondary/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <GraduationCap className="w-8 h-8" />
            {t.education.title}
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {educationList.map((edu) => (
              <Card key={edu.id}>
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      {edu.logo && (
                        <div className="flex-shrink-0">
                          <Image
                            src={edu.logo}
                            alt={edu.school[language]}
                            width={60}
                            height={60}
                            className="rounded-lg object-contain bg-white p-2"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <CardTitle className="text-2xl">{edu.degree[language]}</CardTitle>
                        <CardDescription className="text-base mt-1">{edu.school[language]}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="flex-shrink-0">{edu.period[language]}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {edu.description[language]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center flex items-center justify-center gap-2">
            <Code2 className="w-8 h-8" />
            {t.projects.title}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t.projects.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{project.title[language]}</CardTitle>
                      {project.featured && (
                        <Badge variant="default">{t.projects.featured}</Badge>
                      )}
                    </div>
                    <CardDescription>{project.description[language]}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <Button variant="outline" size="sm" asChild className="gap-2">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                              {t.projects.code}
                            </a>
                          </Button>
                        )}
                        {project.link && (
                          <Button variant="outline" size="sm" asChild className="gap-2">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                              {t.projects.demo}
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20 bg-secondary/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">{t.contact.title}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t.contact.subtitle}
          </p>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Button asChild size="lg" className="w-full gap-2">
                  <a href="mailto:samuel.tesson@epitech.eu">
                    <Mail className="w-5 h-5" />
                    samuel.tesson@epitech.eu
                  </a>
                </Button>

                <Separator />

                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/SamTess" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://linkedin.com/in/samuel-tesson" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            {language === 'fr'
                ? `© ${new Date().getFullYear()} Samuel Tesson. Tous droits réservés.`
                : `© ${new Date().getFullYear()} Samuel Tesson. All rights reserved.`
            }
          </div>
        </div>
      </footer>
    </div>
  );
}
