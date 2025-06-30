import React from "react";

import { useLocalizedContent } from "@/components/hooks/use-localized-content";

import { registryCv } from "@/registry";

import { ExternalLink } from "./external-link";

export default function Info() {
  const getContent = useLocalizedContent(registryCv);
  return (
    <div className='mt-8 h-auto max-w-full print:mt-0'>
      <span className='block w-full text-right text-sm'>
        {getContent("role")}
      </span>

      <div className='flex flex-col items-center justify-center gap-1.5'>
        <h1 className='text-3xl font-bold tracking-wide'>
          {getContent("name")}
        </h1>
        <div className='flex h-5 items-center space-x-4 text-sm'>
          <span>{getContent("phone")}</span>
          <span>|</span>
          <span>{getContent("email")}</span>
        </div>
      </div>

      <div className='mt-2.5 flex w-full flex-col items-end justify-end gap-1.5 print:my-2.5 print:gap-1'>
        <div className='flex flex-col items-end justify-end gap-0.5'>
          <ExternalLink
            href={getContent("links.github")}
            className='print:text-xs'
          >
            {getContent("links.github")}
          </ExternalLink>
        </div>
        <span className='text-muted-foreground text-sm print:text-xs'>
          {getContent("updated_at")}
        </span>
      </div>
      <p className='mb-0 mt-2 font-normal text-sm print:mt-1 leading-6 text-justify'>
        {getContent("bio")}
      </p>
    </div>
  );
}
