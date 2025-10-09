"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { walkthroughs } from "@/data/cybersecurity";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

export default function WalkthroughPage() {
  const params = useParams();
  const { language, setLanguage } = useLanguage();
  const [markdownContent, setMarkdownContent] = useState("");
  const [loading, setLoading] = useState(true);

  const walkthrough = walkthroughs.find((w) => w.id === params.id);

  useEffect(() => {
    if (walkthrough?.mdFile) {
      const mdFileName = walkthrough.mdFile[language];
      fetch(`/walkthroughs/${mdFileName}`)
        .then((res) => res.text())
        .then((text) => {
          setMarkdownContent(text);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error loading markdown:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [walkthrough, language]);

  if (!walkthrough) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-400 mb-4">
            {language === 'fr' ? 'Walkthrough non trouvé' : 'Walkthrough not found'}
          </h1>
          <Link href="/cybersecurity">
            <Button variant="outline" className="border-green-500/30 text-green-400">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'fr' ? 'Retour' : 'Back'}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
            <Link href="/cybersecurity">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <ArrowLeft className="w-5 h-5 text-green-400" />
                <span className="text-lg font-semibold text-green-400">
                  {language === 'fr' ? 'Retour' : 'Back'}
                </span>
              </motion.div>
            </Link>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-4 items-center"
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="gap-2 font-semibold border-green-500/30 text-green-400 hover:bg-green-500/10 bg-transparent hover:text-green-300"
              >
                <Globe className="w-4 h-4" />
                {language === 'fr' ? 'EN' : 'FR'}
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {walkthrough.title}
            </h1>
            <div className="flex flex-wrap gap-3 items-center">
              <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 text-sm">
                {walkthrough.platform}
              </Badge>
              <Badge className={`${getDifficultyColor(walkthrough.difficulty)} text-sm`}>
                {walkthrough.difficulty}
              </Badge>
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <Calendar className="w-4 h-4" />
                {walkthrough.date}
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-400 mb-6">{walkthrough.description[language]}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {walkthrough.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Markdown Content */}
      <section className="container mx-auto px-4 py-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gray-900/50 border-green-500/20 p-8">
            {loading ? (
              <div className="text-center text-gray-400 py-12">
                <div className="animate-pulse">
                  {language === 'fr' ? 'Chargement...' : 'Loading...'}
                </div>
              </div>
            ) : markdownContent ? (
              <div className="prose prose-invert prose-green max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeSanitize]}
                  components={{
                    h1: (props) => (
                      <h1 className="text-3xl font-bold text-green-400 mb-4 mt-8" {...props} />
                    ),
                    h2: (props) => (
                      <h2 className="text-2xl font-bold text-cyan-400 mb-3 mt-6" {...props} />
                    ),
                    h3: (props) => (
                      <h3 className="text-xl font-semibold text-emerald-400 mb-2 mt-4" {...props} />
                    ),
                    p: (props) => <p className="text-gray-300 mb-4 leading-relaxed" {...props} />,
                    code: ({ inline, className, ...props }: { inline?: boolean; className?: string; children?: React.ReactNode }) => {
                      // Déterminer le langage du bloc de code
                      const match = /language-(\w+)/.exec(className || '');
                      const language = match ? match[1] : '';

                      if (inline) {
                        return (
                          <code
                            className="bg-gray-800 text-cyan-200 px-2 py-1 rounded text-sm font-mono"
                            {...props}
                          />
                        );
                      }

                      let textColor = 'text-green-200';
                      if (language === 'bash' || language === 'sh' || language === 'shell') {
                        textColor = 'text-cyan-200';
                      } else if (language === 'http' || language === 'plaintext') {
                        textColor = 'text-emerald-200';
                      } else if (language === 'php' || language === 'python' || language === 'javascript') {
                        textColor = 'text-purple-200';
                      }

                      return (
                        <code
                          className={`block bg-gray-800 ${textColor} p-4 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed [&>*]:${textColor}`}
                          {...props}
                        />
                      );
                    },
                    pre: (props) => (
                      <pre className="bg-gray-800 rounded-lg overflow-hidden mb-4" {...props} />
                    ),
                    ul: (props) => (
                      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2" {...props} />
                    ),
                    ol: (props) => (
                      <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2" {...props} />
                    ),
                    li: (props) => <li className="text-gray-300" {...props} />,
                    a: (props) => (
                      <a
                        className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                      />
                    ),
                    blockquote: (props) => (
                      <blockquote
                        className="border-l-4 border-green-500 pl-4 italic text-gray-400 my-4"
                        {...props}
                      />
                    ),
                    img: (props) => (
                      // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
                      <img className="rounded-lg my-4 max-w-full h-auto" {...props} />
                    ),
                  }}
                >
                  {markdownContent}
                </ReactMarkdown>
              </div>
            ) : (
              <div className="text-center text-gray-400 py-12">
                {language === 'fr'
                  ? 'Aucun contenu disponible pour ce walkthrough.'
                  : 'No content available for this walkthrough.'}
              </div>
            )}
          </Card>

          {walkthrough.writeupUrl && (
            <div className="mt-6 text-center">
              <a href={walkthrough.writeupUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2 border-green-500/30 text-green-400 hover:bg-green-500/10">
                  <ExternalLink className="w-4 h-4" />
                  {language === 'fr' ? 'Voir le Write-up original' : 'View Original Write-up'}
                </Button>
              </a>
            </div>
          )}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-500/20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-500">
            <p className="text-sm">
              {language === 'fr'
                ? '© 2025 Samuel Tesson. Tous droits réservés.'
                : '© 2025 Samuel Tesson. All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
