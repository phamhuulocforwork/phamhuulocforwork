import { useLocale } from "next-intl";

type ContentValue = string | ((args: any) => string);

interface LocalizedContent {
  [key: string]: ContentValue;
}

type SupportedLocales = "vi" | "en";

type Registry = {
  [locale in SupportedLocales]: LocalizedContent;
};

export function useLocalizedContent(registry: Registry) {
  const locale = useLocale() as SupportedLocales;
  const content = registry[locale] || registry.en;

  return function getContent(key: string, args?: any): string {
    if (key in content) {
      const value = content[key];

      if (typeof value === "function") {
        return value(args);
      }

      return value;
    }

    return `[Missing: ${key}]`;
  };
}
