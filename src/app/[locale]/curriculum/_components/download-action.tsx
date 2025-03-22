"use client";

import { DownloadIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export const DownloadAction = ({ className }: { className?: string }) => {
  const locale = useLocale();
  const { setTheme } = useTheme();

  const handlePrint = () => {
    setTheme("light");
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        setTheme("system");
      }, 1);
    }, 100);
  };

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={handlePrint}
      className={cn("bg-transparent border-none", className)}
    >
      <DownloadIcon size={17} />
    </Button>
  );
};
