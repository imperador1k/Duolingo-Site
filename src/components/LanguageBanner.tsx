import React from 'react';
import { Language as LangCode } from '../hooks/useTranslation';

interface LanguageData {
  name: string;
  flag: string;
  code: LangCode;
  visibility?: string;
}

const languages: LanguageData[] = [
  { name: 'INGLÊS', flag: '/flags/usa.svg', code: 'en' },
  { name: 'ESPANHOL', flag: '/flags/es.svg', code: 'es' },
  { name: 'FRANCÊS', flag: '/flags/fr.svg', code: 'fr' },
  { name: 'ALEMÃO', flag: '/flags/de.svg', code: 'de' },
  { name: 'ITALIANO', flag: '/flags/it.svg', code: 'it' },
  { name: 'PORTUGUÊS', flag: '/flags/pt.svg', code: 'pt' },
];

interface LanguageBannerProps {
  onSelectLanguage: (code: LangCode) => void;
}

export const LanguageBanner: React.FC<LanguageBannerProps> = ({ onSelectLanguage }) => {
  return (
    <div className="flex flex-1 flex-wrap justify-center md:justify-between gap-x-4 gap-y-3 md:gap-6 py-4 text-[11px] md:text-sm font-bold text-[#777] uppercase tracking-widest">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onSelectLanguage(lang.code)}
          className={`flex items-center gap-3 cursor-pointer transition-all duration-200 hover:text-[#58cc02] hover:scale-105 active:scale-95 ${lang.visibility || 'flex'}`}
        >
          <img
            src={lang.flag}
            alt={`${lang.name} Flag`}
            className="w-[36px] h-[27px] rounded-sm object-cover shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-black/5"
            loading="lazy"
          />
          <span>{lang.name}</span>
        </button>
      ))}
    </div>
  );
};
