import type { CvRegistry } from "@/types/cv.types";

export const registryCvEn: CvRegistry = {
  role: "FE Developer",
  name: "Pham Huu Loc",
  phone: "(+84) 355-443-403",
  email: "phamhuulocforwork@gmail.com",
  links: {
    github: "https://github.com/phamhuulocforwork",
  },
  updated_at: "Last updated on 12-01-2025",
  bio: "Information Technology student seeking opportunities to learn, gain experience, develop skills, and learn from a real working environment.",
  education: [
    {
      id: crypto.randomUUID(),
      school: "Tra Vinh University",
      period: "2021 - 2025 ● GPA 3.17/4.0",
      course: "Information Technology",
    },
  ],
  certificates: [
    {
      id: crypto.randomUUID(),
      name: "UX Design Professional Certificate",
      issuer: "Google",
      date: "2024",
      url: "https://coursera.org/verify/professional-cert/HEN60D5H9RJX",
    },
  ],
  projects: [
    {
      id: crypto.randomUUID(),
      role: "Front-end",
      title: "Humanitarian Support App/Website - UniHand",
      github: "https://github.com/TVU-OPS/UniHand",
      description:
        "Application connecting communities and providing humanitarian support in emergency situations, natural disasters, and post-pandemic scenarios.",
      complemention:
        "Received honorable mention award at the Open Source Software Competition - Vietnam Student Informatics Olympiad 2024",
      work_with: "Technologies used: ",
      stack: "Noodl App, Strapi, React Native",
      date: "12/2024",
    },
    {
      id: crypto.randomUUID(),
      role: "Full-stack",
      title: "Online Learning LMS Platform - Knowhub",
      github:
        "https://github.com/phamhuulocforwork/cn-da21ttb-phamhuuloc-lms-knowhub-nextjs",
      description:
        "Built a website allowing instructors to create and manage courses, tests, wikis; students can learn and take tests.",
      complemention: "",
      work_with: "Technologies used: ",
      stack:
        "Next.js, Zod, Prisma ORM, Shadcn UI, TailwindCSS, Typescript, MySQL, NodeJS (Express)",
      date: "01/2025",
    },
    {
      id: crypto.randomUUID(),
      role: "Full-stack",
      title: "Building a mechanism for detecting AI-generated code",
      github:
        "https://github.com/phamhuulocforwork/tn-da21ttb-phamhuuloc-aicodedetect-ml-py",
      description:
        "Developed a mechanism to detect AI-generated code in student programming assignments, applied to student assignment systems.",
      complemention: "",
      work_with: "Technologies used: ",
      stack: "Next.js, Python, FastAPI, Lizard",
      date: "05/2025",
    },
  ],
  experiences: [
    {
      id: crypto.randomUUID(),
      company: "Anh Quan Technology Co., Ltd (AQTech)",
      locale: "8/24 Nguyen Dinh Khoi, Ward 4, Tan Binh District, HCMC",
      title: "FE Intern & FE Collaborator",
      description: "Projects completed:",
      projects: [
        {
          id: crypto.randomUUID(),
          label: "AQ EduLOM",
          description:
            "Software system for Managing Learning Outcomes and Accreditation Evidence – Quality improvement to fully meet the requirements of the Ministry of Education and Training according to: Circular 12/2017/TT-BGBDT and Circular 04/2026/TT-BGBDT as well as international accreditation standards such as AUN-QA, ABET, FIBAA,...",
        },
        {
          id: crypto.randomUUID(),
          label: "AQ EduSTM",
          description: "System for managing short-term training courses",
        },
        {
          id: crypto.randomUUID(),
          label: "AQ EduSRM",
          description:
            "System for managing the implementation of scientific research activities in educational institutions. Manages and supports teachers' scientific research",
        },
        {
          id: crypto.randomUUID(),
          label: "AQ EduEAQ",
          description:
            "System for Managing Evidence and Supporting Quality Assurance Accreditation Reporting for Educational Institutions.",
        },
        {
          id: crypto.randomUUID(),
          label: "AQ EduSAE",
          description:
            "Manages extracurricular activities and conduct scores for university students.",
        },
      ],
      complemention:
        "Successfully contributed to more than 5 enterprise-level education management systems. Accumulated practical experience with the React ecosystem and state management tools in a production environment.",
      work_with: "Technologies used: ",
      stack:
        "Next.js, Typescript, Mantine UI, Zustand, Tanstack Query, Zod, TailwindCSS",
      date: "03/2025 - present",
    },
    {
      id: crypto.randomUUID(),
      company: "Cloudair Slution",
      locale:
        "571/25a Pham Van Bach, Ward 15, Tan Binh District, Ho Chi Minh City",
      title: "FE Developer",
      description: "Projects completed:",
      projects: [
        {
          id: crypto.randomUUID(),
          label: "Survey Management (FE)",
          description:
            "The application provides a survey form management and deployment interface, allowing to create/schedule survey sessions.",
        },
        {
          id: crypto.randomUUID(),
          label: "LMS (FE + UI/UX)",
          description:
            "Learning Management System, Participant, Course, Trainer, Calendar, Library management",
        },
      ],
      complemention:
        "Successfully contributed to more than 5 enterprise-level education management systems. Accumulated practical experience with the React ecosystem and state management tools in a production environment.",
      work_with: "Technologies used: ",
      stack:
        "React, TypeScript, Redux Toolkit, RTK Query, @measured/puck, Material-UI, Vite, React Router, Formik, i18next",
      date: "10/2025 - present",
    },
    {
      id: crypto.randomUUID(),
      company: "Diggin DIS., JSC",
      locale:
        "A/99 Nguyen Thi Thap Street, Cityland Residential Area, District 7, Ho Chi Minh City",
      title: "BE Developer",
      description: "Projects completed:",
      projects: [
        {
          id: crypto.randomUUID(),
          label: "Digital insurance services",
          description:
            "An integrated online solution for businesses, enabling providers to sell insurance and handle claims.",
        },
      ],
      work_with: "Technologies used: ",
      stack:
        "Laravel, Redis, MySQL, RESTful API, JWT, Python (AI/ML Integration), FTP/SFTP",
      date: "12/2025 - present",
    },
  ],
};
