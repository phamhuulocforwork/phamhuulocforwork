import Image from "next/image";
import Link from "next/link";

import { Facebook, Github, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  const calculateAge = (birthdate: string) => {
    const birthDate =
      typeof birthdate === "string"
        ? new Date(birthdate.split("/").reverse().join("-"))
        : birthdate;

    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center overflow-hidden border-b border-accent'>
      <div className='max-w-screen-xl w-full flex flex-col mt-12 lg:mt-0 lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0'>
        <div className='max-w-xl'>
          <span className='text-muted-foreground'>hi there👋, I&apos;m</span>
          <h1 className='mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight'>
            Pham Huu Loc
          </h1>
          <span className='text-muted-foreground'>
            {calculateAge("28/10/2003")}, he/him
          </span>
          <p className='mt-6 max-w-[60ch] xs:text-lg'>
            Hey! I&apos;m a web developer studying at University with a focus on
            web development and design. I love exploring new tech and building
            efficient applications. My skills include Next.js, TypeScript,
            Node.js, and Cloud technologies, and I enjoy full-stack development
            to create seamless user experiences.
          </p>
          <div className='mt-6 flex gap-2 items-center'>
            <Link href='/resume.pdf' target='_blank'>
              <Button>Resume</Button>
            </Link>
            <Link href='mailto:phamhuulocforwork@gmail.com' target='_blank'>
              <Button variant='ghost' size='icon'>
                <Mail className='!w-5 !h-5' />
              </Button>
            </Link>
            <Link
              href='https://www.facebook.com/phamhuuloc2003'
              target='_blank'
            >
              <Button variant='ghost' size='icon'>
                <Facebook className='!w-5 !h-5' />
              </Button>
            </Link>
            <Link href='https://github.com/phamhuulocforwork' target='_blank'>
              <Button variant='ghost' size='icon'>
                <Github className='!w-5 !h-5' />
              </Button>
            </Link>
          </div>
        </div>
        <div className='relative lg:max-w-lg xl:max-w-xl w-full shadow-md hover:shadow-xl transition-all duration-300 bg-accent rounded-xl aspect-square'>
          <Image
            src='/me.jpg'
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
