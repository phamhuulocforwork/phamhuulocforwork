import { useLocale } from "next-intl";

type ContentValue = string | ((args: any) => string) | any;

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

  return function getContent(key: string, args?: any): any {
    // Handle nested keys (e.g., 'links.github')
    if (key.includes(".")) {
      const keys = key.split(".");
      let value = content;

      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = value[k];
        } else {
          return `[Missing: ${key}]`;
        }
      }

      if (typeof value === "function") {
        return value(args);
      }

      return value;
    }

    // Handle direct keys
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
