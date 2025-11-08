import { useTranslations } from "next-intl";

import { useLocalizedContent } from "@/components/hooks/use-localized-content";

import type { Certificate } from "@/types/cv.types";

import { registryCv } from "@/registry";

import { ExternalLink } from "./external-link";

export default function Certificates() {
  const getContent = useLocalizedContent(registryCv);
  const t = useTranslations("curriculum");
  return (
    <div className='mt-4 h-auto max-w-full print:mt-0'>
      <h1 className='my-0 text-xl font-semibold print:text-lg'>
        {t("certificates")}
      </h1>
      <ul className='ml-6 mt-2 space-y-1.5 print:list-[square]'>
        {(getContent("certificates") as Certificate[]).map((cert) => (
          <li
            key={cert.id}
            className='relative flex flex-col before:absolute before:-left-4 before:top-1.5 before:h-1.5 before:w-1.5 before:bg-primary'
          >
            <span className='text-muted-foreground text-sm'>{cert.date}</span>
            <strong className='text-sm font-medium'>
              <ExternalLink
                href={cert.url}
                className='text-primary hover:underline'
              >
                {cert.name}
              </ExternalLink>
            </strong>
            <span className='text-muted-foreground text-sm'>{cert.issuer}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
