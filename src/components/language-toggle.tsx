"use client";

import { useLocale } from "next-intl";

import { cn } from "@/lib/utils";

import { usePathname, useRouter } from "@/i18n/navigation";

import { Button } from "./ui/button";

const LanguageToggle = ({ className }: { className?: string }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "vi" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={toggleLanguage}
      className={cn("w-9 px-0", className)}
    >
      <span className='font-medium text-xs'>
        {locale === "en" ? "VI" : "EN"}
      </span>
    </Button>
  );
};

export default LanguageToggle;
