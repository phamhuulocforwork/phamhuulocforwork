export const registryCvEn = {
  role: "Role",
  name: "Pham Huu Loc",
  phone: "(+84) 355-443-403",
  email: "phamhuulocforwork@gmail.com",
  links: {
    github: "https://github.com/phamhuulocforwork",
  },
  updated_at: "Last updated on ...",
  bio: "Bio",
  education: [
    {
      id: crypto.randomUUID(),
      school: "School",
      period: "Period",
      course: "Course",
    },
  ],
  projects: [
    {
      id: crypto.randomUUID(),
      role: "Role",
      title: "Title",
      description: "Description",
      complemention: "Complemention",
      work_with: "Work with: ",
      stack: "Stack",
      date: "Date",
    },
  ],
  experiences: [
    {
      id: crypto.randomUUID(),
      company: "Company",
      locale: "Location",
      title: "Title",
      description: "Description",
      projects: [
        {
          id: crypto.randomUUID(),
          label: "Project Name",
          description: "Project Description",
        },
      ],
      complemention: "Complemention",
      work_with: "Work with: ",
      stack: "Stack",
      date: "Date",
    },
  ],
};
