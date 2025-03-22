"use client";

import { useLocale } from "next-intl";

import { useRouter } from "@/i18n/navigation";

import { Button } from "./ui/button";

const LanguageToggle = () => {
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "vi" : "en";
    router.replace("/", { locale: nextLocale });
  };

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={toggleLanguage}
      className='w-9 px-0'
    >
      <span className='font-medium text-xs'>
        {locale === "en" ? "VI" : "EN"}
      </span>
    </Button>
  );
};

export default LanguageToggle;
