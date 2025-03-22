import React from "react";

import { Blocks, Boxes, Code, Database, Rocket, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const TechnicalSkills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code />,
      skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Node.js", "C#"],
    },
    {
      title: "Frameworks",
      icon: <Boxes />,
      skills: [
        "React.js",
        "Next.js",
        "Astro",
        "Express.js",
        "React Native",
        "Expo",
      ],
    },
    {
      title: "Libraries",
      icon: <Blocks />,
      skills: [
        "TanStack Query",
        "Zod",
        "Tailwind CSS",
        "Shadcn UI",
        "Material UI",
        "Ant Design",
      ],
    },
    {
      title: "Database & Backend",
      icon: <Database />,
      skills: [
        "ASP.NET Core",
        "MongoDB",
        "MySQL",
        "Sequelize ORM",
        "Prisma ORM",
        "Firebase",
      ],
    },
    {
      title: "Cloud & Deployment",
      icon: <Rocket />,
      skills: ["Google Cloud Platform (GCP)", "Vercel"],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench />,
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "Visual Studio Code",
        "Figma",
        "Blender",
        "Illustrator",
        "Photoshop",
        "Premiere Pro",
        "After Effects",
        "Unity",
        "Godot",
      ],
    },
  ];

  return (
    <section
      id='skills'
      className='w-full max-w-screen-xl mx-auto py-6 xs:py-12 px-6'
    >
      <h2 className='text-3xl font-bold text-center mb-12 dark:text-white'>
        Technical Skills
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className=' p-6 rounded-lg border dark:border-none shadow-md hover:shadow-xl transition-shadow duration-300'
          >
            <h3 className='text-xl font-semibold mb-4 flex items-center gap-2'>
              <div className='p-2 rounded-md bg-muted'>{category.icon}</div>
              {category.title}
            </h3>
            <div className='flex flex-wrap gap-2'>
              <ul className='list-[square] pl-5'>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className='text-sm'>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
