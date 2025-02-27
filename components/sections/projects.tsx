"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    name: "Project Name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    logo: "/placeholder.svg",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    team: [
      {
        name: "Pham Huu Loc",
        role: "Web Developer",
        url: "https://github.com/phamhuulocforwork",
        avatar: "https://github.com/phamhuulocforwork.png",
      },
    ],
  },
  {
    id: 2,
    name: "Project Name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    logo: "/placeholder.svg",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    team: [
      {
        name: "Pham Huu Loc",
        role: "Web Developer",
        url: "https://github.com/phamhuulocforwork",
        avatar: "https://github.com/phamhuulocforwork.png",
      },
    ],
  },
  {
    id: 3,
    name: "Project Name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    logo: "/placeholder.svg",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    team: [
      {
        name: "Pham Huu Loc",
        role: "Web Developer",
        url: "https://github.com/phamhuulocforwork",
        avatar: "https://github.com/phamhuulocforwork.png",
      },
    ],
  },
];

export default function ProjectCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      id='projects'
      className='w-full max-w-screen-xl mx-auto py-6 xs:py-12 px-6'
    >
      <h2 className='mb-8 xs:mb-14 text-4xl md:text-5xl font-bold text-center tracking-tight'>
        Projects
      </h2>
      <div className='container w-full mx-auto'>
        <Carousel setApi={setApi}>
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <Projects project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className='flex items-center justify-center gap-2'>
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn("h-3.5 w-3.5 rounded-full border-2", {
                "bg-primary border-primary": current === index + 1,
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Projects = ({ project }: { project: (typeof projects)[number] }) => (
  <div className='mb-8 bg-accent rounded-xl py-8 px-6 sm:py-6'>
    <div className='flex flex-col gap-6'>
      <div className='flex items-start gap-6'>
        <div className='relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-background'>
          <Image
            src={project.logo}
            fill
            alt={`${project.name} logo`}
            className='object-cover'
          />
        </div>
        <div className='flex-1'>
          <h3 className='text-2xl font-bold'>{project.name}</h3>
          <p className='mt-2 text-muted-foreground'>{project.description}</p>
        </div>
      </div>

      <div>
        <h4 className='text-sm font-semibold mb-2'>Tech Stack</h4>
        <div className='flex flex-wrap gap-2'>
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className='px-3 py-1 text-sm rounded-full bg-primary/10 text-primary'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className='text-sm font-semibold mb-2'>Team Members</h4>
        <div className='flex flex-wrap gap-4'>
          {project.team.map((member) => (
            <div key={member.name} className='flex items-center gap-2'>
              <Avatar>
                <AvatarImage src={member.avatar} />
                <AvatarFallback className='bg-primary text-primary-foreground'>
                  {member.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className='text-sm font-medium'>{member.name}</p>
                <p className='text-xs text-muted-foreground'>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
