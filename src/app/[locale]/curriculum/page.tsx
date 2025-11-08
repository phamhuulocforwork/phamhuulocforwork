import LanguageToggle from "@/components/language-toggle";
import ThemeToggle from "@/components/theme-toggle";

import Certificate from "./_components/certificate";
import { DownloadAction } from "./_components/download-action";
import Education from "./_components/education";
import Experiences from "./_components/experiences";
import Info from "./_components/info";
import Project from "./_components/project";

export const metadata = {
  title: "CV-PhamHuuLoc-FE-Intern",
  alternates: {
    canonical: "/curriculum",
  },
};

export default function Curriculum() {
  return (
    <div className='relative mx-auto max-w-3xl min-h-screen print:bg-white print:text-black'>
      <div className='absolute left-0 right-0 top-0 flex items-center gap-2 print:hidden'>
        <ThemeToggle className='bg-transparent border-none' />
        <LanguageToggle className='bg-transparent border-none' />
        <DownloadAction className='bg-transparent border-none' />
      </div>

      <Info />
      <Education />
      <Certificate />
      <Project />
      <Experiences />
    </div>
  );
}
