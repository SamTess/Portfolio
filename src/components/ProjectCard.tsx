"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {project.title[language]}
            </CardTitle>
            {project.featured && (
              <Badge variant="default" className="animate-pulse">
                {language === 'fr' ? 'À la une' : 'Featured'}
              </Badge>
            )}
          </div>
          <CardDescription className="line-clamp-3">
            {project.description[language]}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-2">
              {project.github && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="gap-2 flex-1"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    {language === 'fr' ? 'Code' : 'Code'}
                  </a>
                </Button>
              )}
              {project.link && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="gap-2 flex-1"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {language === 'fr' ? 'Démo' : 'Demo'}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
