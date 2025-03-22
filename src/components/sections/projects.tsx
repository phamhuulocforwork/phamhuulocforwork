"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { SquareArrowOutUpRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    name: "Lisicify (2/2024)",
    description: "Music Streaming Website",
    url: "https://github.com/ddnmanh/Lisicify",
    featuredList: [
      "Developed a website for music streaming with user authentication",
      "Implemented playlist creation and management features",
      "Built album and artist profile browsing functionality",
      "Created genre-based music discovery and recommendations",
      "Designed responsive UI for seamless experience across devices",
    ],
    logo: "/projects/lisicify.png",
    techStack: ["React.js", "Tailwind CSS", "Jira", "Node.js", "Express.js"],
    team: [
      {
        name: "Pham Huu Loc",
        role: "UI/UX, FE Development",
        url: "https://github.com/phamhuulocforwork",
        avatar: "https://github.com/phamhuulocforwork.png",
      },
      {
        name: "Nguyen Duc Manh",
        role: "BE Development",
        url: "https://github.com/ddnmanh",
        avatar: "https://github.com/ddnmanh.png",
      },
    ],
  },
  {
    id: 2,
    name: "UniHand (12/2024)",
    description: "Community Connection and Humanitarian Support Management",
    url: "https://github.com/TVU-OPS/UniHand",
    featuredList: [
      "Application for Community Connection and Humanitarian Support Management in Emergency Situations or Post-pandemic, Natural Disasters, etc.",
      "The project participated in the “Open Source Software - Vietnam Student Informatics Olympic 2024” competition and won an Encouragement Award.",
    ],
    logo: "/projects/unihand.png",
    techStack: ["Noodl App", "Strapi", "React Native"],
    team: [
      {
        name: "Pham Huu Loc",
        role: "FE Development",
        url: "https://github.com/phamhuulocforwork",
        avatar: "https://github.com/phamhuulocforwork.png",
      },
      {
        name: "Dinh Tan Mai",
        role: "FE Development",
        url: "https://github.com/tanmaiii",
        avatar: "https://github.com/tanmaiii.png",
      },
      {
        name: "Nguyen Dinh Tri",
        role: "BE Development",
        url: "https://github.com/dinhtri21",
        avatar: "https://github.com/dinhtri21.png",
      },
    ],
  },
  {
    id: 3,
    name: "Knowhub (1/2025)",
    description: "Learning Management System",
    url: "https://github.com/phamhuulocforwork/cn-da21ttb-phamhuuloc-lms-knowhub-nextjs",
    featuredList: [
      "Developed a comprehensive Learning Management System where instructors can create and manage courses, quizzes, wiki, and lessons.",
      "Students can engage in learning activities, access course materials, and take quizzes to test their knowledge.",
      "Built with modern web technologies to ensure responsive design and optimal user experience.",
    ],
    logo: "/projects/knowhub.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Shadcn UI",
      "Zod",
      "Node.js",
      "Express.js",
      "Prisma",
      "MySQL",
      "JWT",
      "bcrypt",
    ],
    team: [
      {
        name: "Pham Huu Loc",
        role: "Full Stack Development",
        url: "https://github.com/phamhuulocforwork",
        avatar: "https://github.com/phamhuulocforwork.png",
      },
    ],
  },
  {
    id: 4,
    name: "Combill UI (2/2025)",
    description: "Customized Shadcn UI Blocks, Components & Hooks",
    url: "https://combillui.vercel.app",
    featuredList: [
      "Curated collection of pre-built Shadcn UI blocks and components for rapid development",
      "Ready-to-use code examples with live preview and one-click copy functionality",
      "Custom hooks and utilities to enhance React application development workflow",
    ],
    logo: "/projects/combillui.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Shadcn UI",
      "Framer Motion",
    ],
    team: [
      {
        name: "Pham Huu Loc",
        role: "Full Stack Development",
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
    <section
      id='projects'
      className='w-full max-w-screen-xl mx-auto py-6 xs:py-12 px-6 '
    >
      <h2 className='mb-8 xs:mb-14 text-4xl md:text-5xl font-bold text-center tracking-tight'>
        Projects
      </h2>
      <div className='container select-none cursor-grab w-full mx-auto'>
        <Carousel setApi={setApi}>
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <Projects project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className='flex items-center justify-center gap-2 mt-4'>
          {Array.from({ length: count }).map((_, index) => (
            <Button
              key={index}
              onClick={() => api?.scrollTo(index)}
              variant='ghost'
              size='icon'
              className={cn("h-3.5 w-3.5 rounded-full p-0 border-2", {
                "bg-primary border-primary": current === index + 1,
              })}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const Projects = ({ project }: { project: (typeof projects)[number] }) => (
  <Card className='mb-8'>
    <CardContent className='pt-8 px-6 sm:pt-6'>
      <div className='flex flex-col gap-6'>
        <div className='flex items-center gap-4'>
          <div className='relative w-16 h-16 shrink-0 border rounded-lg overflow-hidden bg-background'>
            <Link
              href={project.url}
              className='flex items-center gap-2 hover:underline underline-offset-2'
              target='_blank'
            >
              <Image
                src={project.logo || "/placeholder.svg"}
                fill
                alt={`${project.name} logo`}
                className='object-cover'
              />
            </Link>
          </div>
          <div className='flex-1'>
            <CardTitle className='text-xl'>
              <Link
                href={project.url}
                className='flex items-center gap-2 hover:underline underline-offset-2'
                target='_blank'
              >
                {project.name}
                <SquareArrowOutUpRight className='w-4 h-4' />
              </Link>
            </CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </div>
        </div>

        <Separator />

        <div>
          <h4 className='text-sm font-semibold mb-2'>Featured</h4>
          <ul className='list-[square] pl-5'>
            {project.featuredList.map((feature) => (
              <li key={feature} className='text-sm'>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className='text-sm font-semibold mb-2'>Tech Stack</h4>
          <div className='flex flex-wrap gap-2'>
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant='secondary'
                className='bg-primary/10 text-primary hover:bg-primary/15'
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h4 className='text-sm font-semibold mb-2'>Team Members</h4>
          <div className='flex flex-wrap gap-4'>
            {project.team.map((member) => (
              <div key={member.name} className='flex items-center gap-2'>
                <Link href={member.url} target='_blank'>
                  <Avatar>
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback className='bg-primary text-primary-foreground'>
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Link>
                <div>
                  <p className='text-sm font-medium'>{member.name}</p>
                  <p className='text-xs text-muted-foreground'>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);
