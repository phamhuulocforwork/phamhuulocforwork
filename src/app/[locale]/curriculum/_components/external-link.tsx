import { HTMLAttributes } from "react";

import Link, { type LinkProps } from "next/link";

import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ExternalLinkProps
  extends LinkProps,
    HTMLAttributes<HTMLAnchorElement> {
  icon?: boolean;
}

export const ExternalLink = ({
  className,
  href,
  children,
  icon = true,
  ...props
}: ExternalLinkProps) => {
  return (
    <Link
      {...props}
      href={href}
      target='_blank'
      rel='noreferrer noopener'
      referrerPolicy='no-referrer'
      className={cn(
        "inline-flex w-auto text-sm items-center gap-1 break-words text-blue-600 hover:underline dark:text-blue-500 ",
        className,
      )}
    >
      {children}
      {icon && <ArrowUpRight size={17} />}
    </Link>
  );
};
