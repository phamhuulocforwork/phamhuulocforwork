import { useTranslations } from "next-intl";

import { useLocalizedContent } from "@/components/hooks/use-localized-content";

import type { Education } from "@/types/cv.types";

import { registryCv } from "@/registry";

export default function Education() {
  const getContent = useLocalizedContent(registryCv);
  const t = useTranslations("curriculum");
  return (
    <div className='mt-4 h-auto w-full print:mt-0'>
      <h1 className='my-0 text-xl font-semibold print:text-lg'>
        {t("education")}
      </h1>
      <ul className='ml-6 mt-2 space-y-1.5 print:list-[square]'>
        {(getContent("education") as Education[]).map((edu) => (
          <li
            key={edu.id}
            className='relative flex flex-col before:absolute before:-left-4 before:top-1.5 before:h-1.5 before:w-1.5 before:bg-primary'
          >
            <span className='text-muted-foreground text-sm'>{edu.period}</span>
            <strong className='text-sm font-medium'>{edu.school}</strong>
            <span className='text-muted-foreground text-sm'>{edu.course}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
