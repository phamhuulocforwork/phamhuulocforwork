import Image from "next/image";
import Link from "next/link";

import { Facebook, Github, Mail } from "lucide-react";
import { useLocale } from "next-intl";

import { useLocalizedContent } from "@/components/hooks/use-localized-content";
import { Button } from "@/components/ui/button";

import { registryAbout } from "@/registry";

const About = () => {
  const locale = useLocale();

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

  const age = calculateAge("28/10/2003");

  const getContent = useLocalizedContent(registryAbout);

  return (
    <section className='w-full min-h-[calc(100vh-4rem)] mt-16 container p-4 sm:px-6 flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10'>
      <div className='max-w-xl'>
        <span className='block text-muted-foreground'>
          {getContent("greeting")}
        </span>
        <h1 className='mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight'>
          {getContent("name")}
        </h1>
        <span className='text-muted-foreground'>
          {getContent("pronouns", age)}
        </span>
        <p className='mt-6 max-w-[60ch] xs:text-lg'>
          {getContent("description")}
        </p>
        <div className='mt-6 flex gap-2 items-center'>
          <Link href='/resume.pdf' target='_blank'>
            <Button>{getContent("resume")}</Button>
          </Link>
          <Link href='mailto:phamhuulocforwork@gmail.com' target='_blank'>
            <Button variant='ghost' size='icon'>
              <Mail className='!w-5 !h-5' />
            </Button>
          </Link>
          <Link href='https://www.facebook.com/phamhuuloc2003' target='_blank'>
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
      <div className='relative max-w-lg w-full shadow-md hover:shadow-xl transition-all duration-300 bg-accent rounded-xl aspect-square'>
        <Image
          src='/me.jpg'
          fill
          alt='@phamhuulocforwork'
          className='object-cover rounded-xl'
        />
      </div>
    </section>
  );
};

export default About;
