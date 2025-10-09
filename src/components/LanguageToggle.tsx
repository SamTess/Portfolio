"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
      className="gap-2 font-semibold"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
      {language === 'fr' ? 'EN' : 'FR'}
    </Button>
  );
}
