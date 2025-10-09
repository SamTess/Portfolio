"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Target, Zap, Trophy, Activity } from "lucide-react";

interface HTBProfileCardProps {
  language: 'fr' | 'en';
  username: string;
  profileUrl?: string;
}

export default function HTBProfileCard({ language, username, profileUrl }: HTBProfileCardProps) {
  const htbUrl = profileUrl || `https://app.hackthebox.com/profile/${username}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto"
    >
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-green-500/30 hover:border-green-500/50 transition-all duration-300">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              {/* HTB Logo */}
              <div className="w-16 h-16 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/30">
                <svg className="w-10 h-10 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.996 0a1.119 1.119 0 0 0-.057.002a1.119 1.119 0 0 0-.997 1.116v5.268L9.89 7.231a1.12 1.12 0 0 0-.838-.373H4.01a1.12 1.12 0 1 0 0 2.238h4.592l1.05.855v2.624H6.55a1.12 1.12 0 0 0-.838.373l-3.665 4.089A1.12 1.12 0 0 0 3.5 18.846h.243V22.881a1.12 1.12 0 0 0 2.238 0v-3.768l2.39-2.666h.838v2.67l-2.39 2.666a1.12 1.12 0 1 0 1.664 1.49l1.726-1.927V24a1.12 1.12 0 0 0 2.238 0v-2.654l1.726 1.927a1.12 1.12 0 1 0 1.664-1.49l-2.39-2.666v-2.67h.838l2.39 2.666V22.881a1.12 1.12 0 0 0 2.238 0v-4.035h.243a1.12 1.12 0 0 0 .838-1.864l-3.665-4.089a1.12 1.12 0 0 0-.838-.373h-3.103V9.896l1.05-.855h4.592a1.12 1.12 0 1 0 0-2.238h-5.042a1.12 1.12 0 0 0-.838.373l-1.052.855V1.766A1.12 1.12 0 0 0 12.054.002a1.119 1.119 0 0 0-.058-.002z"/>
                </svg>
              </div>
              <div>
                <CardTitle className="text-2xl text-green-400 flex items-center gap-2">
                  Hack The Box
                  <Badge variant="outline" className="border-green-500/30 text-green-400">
                    {language === 'fr' ? 'Profil' : 'Profile'}
                  </Badge>
                </CardTitle>
                <CardDescription className="text-gray-400 mt-1">
                  @{username}
                </CardDescription>
              </div>
            </div>
            <a href={htbUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2 border-green-500/30 text-green-400 hover:bg-green-500/10">
                <ExternalLink className="w-4 h-4" />
                {language === 'fr' ? 'Voir le profil' : 'View Profile'}
              </Button>
            </a>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Description */}
          <p className="text-gray-300">
            {language === 'fr' 
              ? "En apprentissage constant sur Hack The Box, je développe mes compétences en sécurité offensive à travers des machines et challenges variés. Focus principal sur la sécurité web, Linux et Active Directory."
              : "Constantly learning on Hack The Box, I'm developing my offensive security skills through various machines and challenges. Main focus on web security, Linux and Active Directory."
            }
          </p>

          {/* Stats placeholder - Vous pouvez ajouter vos vrais stats ici */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-green-400" />
                <span className="text-xs text-gray-400">
                  {language === 'fr' ? 'Rang' : 'Rank'}
                </span>
              </div>
              <p className="text-lg font-bold text-green-400">
                Script Kiddie
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 border border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-gray-400">
                  {language === 'fr' ? 'Points' : 'Points'}
                </span>
              </div>
              <p className="text-lg font-bold text-cyan-400">5</p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 border border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span className="text-xs text-gray-400">
                  {language === 'fr' ? 'Machines' : 'Machines'}
                </span>
              </div>
              <p className="text-lg font-bold text-yellow-400">2</p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 border border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-purple-400" />
                <span className="text-xs text-gray-400">
                  {language === 'fr' ? 'Actif' : 'Active'}
                </span>
              </div>
              <p className="text-lg font-bold text-purple-400">
                {language === 'fr' ? 'En cours' : 'Ongoing'}
              </p>
            </div>
          </div>

          {/* Focus areas */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-3">
              {language === 'fr' ? 'Domaines de focus :' : 'Focus areas:'}
            </h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-green-500/10 text-green-300 border border-green-500/20">
                Web Security
              </Badge>
              <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                Linux Privilege Escalation
              </Badge>
              <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Active Directory
              </Badge>
              <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                Windows Security
              </Badge>
            </div>
          </div>

          {/* Note */}
          <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
            <p className="text-sm text-gray-400">
              {language === 'fr' 
                ? "💡 En constante évolution - Les stats sont mises à jour régulièrement au fur et à mesure de ma progression sur la plateforme."
                : "💡 Constantly evolving - Stats are regularly updated as I progress on the platform."
              }
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
