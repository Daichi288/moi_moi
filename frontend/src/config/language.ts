import { LocalizationValue, Prefix } from "@type";

type LanguagePrefix = Prefix;

const language: { [Key in LanguagePrefix]: LocalizationValue } = {
  Home: {
    ja: 'ホーム',
    en: 'Home',
  },
  NotFound: {
    ja: 'エラー',
    en: 'error',
  },
  Glossary: {
    ja: '用語集',
    en: 'Glossary',
  },
  Users: {
    ja: '雀士一覧',
    en: 'Users',
  },
};

export default language;