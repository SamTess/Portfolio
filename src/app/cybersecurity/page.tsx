"use client";

import { motion } from "framer-motion";
import { Shield, Award, Terminal, ChevronRight, ExternalLink, Calendar, Tag, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { walkthroughs, cyberSkills } from "@/data/cybersecurity";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import HTBProfileCard from "@/components/HTBProfileCard";

export default function CybersecurityPage() {
  const { language, setLanguage } = useLanguage();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Medium":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Hard":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "Insane":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/90 border-b border-green-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform"
              >
                ST
              </motion.h1>
            </Link>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-4 items-center"
            >
              {/* Language Toggle avec style dark */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="gap-2 font-semibold border-green-500/30 text-green-400 hover:bg-green-500/10 bg-transparent hover:text-green-300"
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4" />
                {language === 'fr' ? 'EN' : 'FR'}
              </Button>
              <Link href="/">
                <Button variant="outline" size="sm" className="border-green-500/30 text-green-400 hover:bg-green-500/10 bg-transparent hover:text-green-300">
                  {language === 'fr' ? 'Retour au Portfolio' : 'Back to Portfolio'}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-500/10 rounded-full border border-green-500/20">
                <Shield className="w-16 h-16 text-green-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {language === 'fr' ? 'Cybersécurité' : 'Cybersecurity'}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {language === 'fr'
                ? "Mes compétences, certifications et derniers challenges en sécurité informatique"
                : "My skills, certifications and latest challenges in cybersecurity"
              }
            </p>
          </div>
        </motion.div>
      </section>

      {/* Hack The Box Profile Section */}
      <section className="container mx-auto px-4 py-12">
        <HTBProfileCard
          language={language}
          username="2632069"
        />
      </section>

      {/* Certifications Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-950/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center flex items-center justify-center gap-2 text-green-400">
            <Award className="w-8 h-8 text-green-400" />
            {language === 'fr' ? 'Certifications' : 'Certifications'}
          </h2>

          <div className="text-center text-gray-400 max-w-2xl mx-auto">
            <p className="mb-4">
              {language === 'fr'
                ? "🎯 En cours d'apprentissage - Pas encore de certifications, mais c'est dans les objectifs !"
                : "🎯 Currently learning - No certifications yet, but it's in the goals!"
              }
            </p>
            <p className="text-sm text-gray-500">
              {language === 'fr'
                ? "Objectifs futurs : OSCP, eJPT, ou équivalent"
                : "Future goals: OSCP, eJPT, or equivalent"
              }
            </p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center flex items-center justify-center gap-2 text-green-400">
            <Terminal className="w-8 h-8 text-green-400" />
            {language === 'fr' ? 'Compétences' : 'Skills'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cyberSkills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gray-900 border-green-500/20 hover:border-green-500/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg text-cyan-400">{skillGroup.category[language]}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs bg-green-500/10 text-green-300 border border-green-500/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Walkthroughs Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center flex items-center justify-center gap-2 text-green-400">
            <Terminal className="w-8 h-8 text-green-400" />
            {language === 'fr' ? 'Derniers Walkthroughs' : 'Latest Walkthroughs'}
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            {language === 'fr'
              ? "Mes derniers challenges et write-ups sur différentes plateformes de cybersécurité"
              : "My latest challenges and write-ups on various cybersecurity platforms"
            }
          </p>

          {walkthroughs.length === 0 ? (
            <div className="text-center text-gray-400 max-w-2xl mx-auto">
              <p className="mb-4">
                {language === 'fr'
                  ? "Aucun walkthrough pour le moment. Ajoutez vos write-ups dans src/data/cybersecurity.ts"
                  : "No walkthroughs yet. Add your write-ups in src/data/cybersecurity.ts"
                }
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {walkthroughs.map((walkthrough, index) => (
                <motion.div
                  key={walkthrough.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 bg-gray-900 border-green-500/20">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl text-cyan-400">{walkthrough.title}</CardTitle>
                        {walkthrough.featured && (
                          <Badge variant="default" className="bg-green-500 text-black">
                            {language === 'fr' ? 'À la une' : 'Featured'}
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">{walkthrough.platform}</Badge>
                        <Badge className={getDifficultyColor(walkthrough.difficulty)}>
                          {walkthrough.difficulty}
                        </Badge>
                      </div>
                      <CardDescription className="flex items-center gap-1 text-sm text-gray-400">
                        <Calendar className="w-3 h-3" />
                        {walkthrough.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-sm text-gray-300">
                          {walkthrough.description[language]}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {walkthrough.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          {walkthrough.mdFile && (
                            <Link href={`/cybersecurity/walkthrough/${walkthrough.id}`} className="flex-1">
                              <Button variant="default" size="sm" className="w-full gap-2 bg-green-500 hover:bg-green-600 text-black">
                                <ChevronRight className="w-4 h-4" />
                                {language === 'fr' ? 'Lire le Walkthrough' : 'Read Walkthrough'}
                              </Button>
                            </Link>
                          )}
                          {walkthrough.writeupUrl && (
                            <Button variant="outline" size="sm" asChild className={`gap-2 border-green-500/30 text-green-400 hover:bg-green-500/10 ${walkthrough.mdFile ? 'flex-1' : 'w-full'}`}>
                              <a href={walkthrough.writeupUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                                {language === 'fr' ? 'Lien externe' : 'External Link'}
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
          )}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <Card className="border-green-500/30 bg-gradient-to-br from-green-500/5 to-cyan-500/5">
            <CardContent className="pt-6">
              <Shield className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-2xl font-bold mb-2 text-green-400">
                {language === 'fr' ? 'Intéressé par la cybersécurité ?' : 'Interested in cybersecurity?'}
              </h3>
              <p className="text-gray-400 mb-6">
                {language === 'fr'
                  ? "N'hésitez pas à me contacter pour échanger sur la sécurité informatique"
                  : "Feel free to contact me to discuss about information security"
                }
              </p>
              <Link href="/#contact">
                <Button size="lg" className="gap-2 bg-green-500 hover:bg-green-600 text-black">
                  {language === 'fr' ? 'Me Contacter' : 'Contact Me'}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-500/20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-500">
            <p className="text-sm">
              {language === 'fr'
                ? `© ${new Date().getFullYear()} Samuel Tesson. Tous droits réservés.`
                : `© ${new Date().getFullYear()} Samuel Tesson. All rights reserved.`
              }
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}