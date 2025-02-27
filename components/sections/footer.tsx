import Link from "next/link";

import { FacebookIcon, GithubIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className='mt-12 xs:mt-20 dark bg-background border-t'>
      <div className='max-w-screen-xl mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6'>
        <span className='text-muted-foreground text-center xs:text-start'>
          &copy; {new Date().getFullYear()}{" "}
          <Link href='https://github.com/phamhuulocforwork' target='_blank'>
            Pham Huu Loc
          </Link>
        </span>

        <div className='flex items-center gap-5 text-muted-foreground'>
          <Link href='https://www.facebook.com/phamhuuloc2003' target='_blank'>
            <FacebookIcon className='h-5 w-5' />
          </Link>
          <Link href='https://github.com/phamhuulocforwork' target='_blank'>
            <GithubIcon className='h-5 w-5' />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
