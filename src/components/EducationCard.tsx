"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  delay?: number;
}

export function EducationCard({
  degree,
  institution,
  period,
  description,
  delay = 0
}: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">{degree}</CardTitle>
              <CardDescription className="text-base mt-1">
                {institution}
              </CardDescription>
            </div>
            <Badge variant="outline">{period}</Badge>
          </div>
        </CardHeader>
        {description && (
          <CardContent>
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
}
