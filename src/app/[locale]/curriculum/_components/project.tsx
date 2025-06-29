import React from "react";

import { useTranslations } from "next-intl";

import { useLocalizedContent } from "@/components/hooks/use-localized-content";

import { registryCv } from "@/registry";

export default function Project() {
  const getContent = useLocalizedContent(registryCv);
  const t = useTranslations("curriculum");
  return (
    <div className='mt-6 h-auto max-w-full print:mt-0'>
      <h1 className='my-0 text-xl font-semibold print:text-lg'>
        {t("projects")}
      </h1>
      <ul className='ml-6 mt-2'>
        {(getContent("projects") as any[]).map((project) => (
          <li key={project.id} className='mt-3 flex items-start print:mt-1'>
            <strong className='min-w-14 pt-3.5 text-sm print:pt-0'>
              {project.date}
            </strong>
            <div className='relative flex flex-col w-full pl-8'>
              <hr className='pb-3.5' />
              <div className='flex items-start justify-between gap-0.5'>
                <div className='flex flex-col text-primary'>
                  <strong>{project.title}</strong>
                </div>
                <span className='text-right font-medium text-sm'>
                  {project.role}
                </span>
              </div>
              <div className='my-1.5'>
                <p className='mb-0 font-light leading-snug tracking-wide text-sm'>
                  {project.description}
                </p>
                <p className='mb-0 font-normal leading-snug tracking-wide text-sm'>
                  {project.complemention}
                </p>
              </div>
              <p className='mb-2 text-primary text-sm'>
                <strong className='font-medium'>{project.work_with}</strong>
                <em className='text-muted-foreground'>{project.stack}</em>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
