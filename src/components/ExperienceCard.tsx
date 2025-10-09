"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  company: string;
  location?: string;
  period: string;
  responsibilities: string[];
  delay?: number;
}

export function ExperienceCard({
  title,
  company,
  location,
  period,
  responsibilities,
  delay = 0
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">{title}</CardTitle>
              <CardDescription className="text-base mt-1">
                {company}{location && ` • ${location}`}
              </CardDescription>
            </div>
            <Badge variant="outline">{period}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>• {responsibility}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
