import Image from "next/image";

import { LaptopMinimalCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <div className='min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent'>
      <div className='max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0'>
        <div className='max-w-xl'>
          <Badge className='rounded-full py-1 border-none'>
            <div className='flex items-center gap-1.5'>
              <LaptopMinimalCheck className='!h-5 !w-5' />
              Web developer
            </div>
          </Badge>
          <h1 className='mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight'>
            Pham Huu Loc
          </h1>
          <p className='mt-6 max-w-[60ch] xs:text-lg'>
            I&apos;m currently studying at University, focusing on web development and graphic design. 
            I&apos;m passionate about exploring new technologies and building interesting projects. 
            My goal is to become a full-stack developer.
          </p>
        </div>
        <div className='relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-xl aspect-square'>
          <Image
            src='https://github.com/phamhuulocforwork.png'
            fill
            alt='@phamhuulocforwork'
            className='object-cover rounded-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
