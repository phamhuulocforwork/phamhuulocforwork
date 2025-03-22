import React from "react";

import { useTranslations } from "next-intl";

import { useLocalizedContent } from "@/components/hooks/use-localized-content";

import { registryCv } from "@/registry";

export default function Experiences() {
  const getContent = useLocalizedContent(registryCv);
  const t = useTranslations("curriculum");
  return (
    <div className='mt-6 h-auto max-w-full print:mt-0'>
      <h1 className='my-0 text-xl font-semibold print:text-lg'>
        {t("experiences")}
      </h1>
      <ul className='ml-6 mt-2'>
        {(getContent("experiences") as any[]).map((exp) => (
          <li key={exp.id} className='mt-3 flex items-start print:mt-1'>
            <strong className='min-w-14 pt-3.5 text-sm print:pt-0'>
              {exp.date}
            </strong>
            <div className='relative flex flex-col w-full pl-8'>
              <hr className='pb-3.5 print:hidden' />
              <div className='flex items-start justify-between gap-0.5'>
                <div className='flex flex-col text-primary'>
                  <strong>{exp.title}</strong>
                  <strong className='font-normal text-sm text-muted-foreground'>
                    {exp.locale}
                  </strong>
                </div>
                <span className='text-right font-medium text-sm'>
                  {exp.company}
                </span>
              </div>
              <div className='my-1.5'>
                <p className='mb-0 font-light leading-snug tracking-wide text-sm'>
                  {exp.description}
                </p>
                {exp.projects && (
                  <div className='my-2 pl-4'>
                    <ul className='list-disc space-y-1.5'>
                      {exp.projects.map((project: any) => (
                        <li key={project.id} className='flex'>
                          <p className='mb-0 font-light leading-tight text-sm'>
                            <strong className='font-medium text-primary'>
                              - {project.label}
                              {": "}
                            </strong>
                            {project.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className='mb-0 font-normal leading-snug tracking-wide text-sm'>
                  {exp.complemention}
                </p>
              </div>
              <p className='mb-2 text-primary text-sm'>
                <strong className='font-medium'>{exp.work_with}</strong>
                <em className='text-muted-foreground'>{exp.stack}</em>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
