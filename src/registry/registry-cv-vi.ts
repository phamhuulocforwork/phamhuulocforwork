export const registryCvVi = {
  role: "Thực tập sinh FE",
  name: "Phạm Hữu Lộc",
  phone: "(+84) 355-443-403",
  email: "phamhuulocforwork@gmail.com",
  links: {
    github: "https://github.com/phamhuulocforwork",
  },
  updated_at: "Cập nhật lần cuối 29/06/2025",
  bio: "Sinh viên năm 4 ngành Công nghệ Thông tin tìm kiếm cơ hội học tập, trau dồi kinh nghiệm, phát triển kỹ năng và học hỏi từ môi trường làm việc thực tế.",
  education: [
    {
      id: crypto.randomUUID(),
      school: "Trường Đại học Trà Vinh",
      period: "2021 - hiện nay",
      course: "Ngành Công nghệ Thông tin",
    },
  ],
  projects: [
    {
      id: crypto.randomUUID(),
      role: "Front-end & UI/UX",
      title: "Website nghe nhạc - Lisicify",
      github: "https://github.com/ddnmanh/Lisicify",
      description:
        "Xây dựng website cho phép nghe nhạc, quản lý playlist, album, tác giả, thể loại.",
      complemention: "",
      work_with: "Công nghệ sử dụng: ",
      stack: "Jira, ReactJS, NodeJS (Express)",
      date: "02/2024",
    },
    {
      id: crypto.randomUUID(),
      role: "Front-end",
      title: "Ứng dụng/Website hỗ trợ nhân đạo - UniHand",
      github: "https://github.com/TVU-OPS/UniHand",
      description:
        "Ứng dụng kết nối cộng đồng và hỗ trợ nhân đạo trong các tình huống khẩn cấp, thiên tai, hậu đại dịch.",
      complemention:
        "Đạt giải khuyến khích tại cuộc thi Phần Mềm Nguồn Mở - Olympic Tin học Sinh viên Việt Nam 2024",
      work_with: "Công nghệ sử dụng: ",
      stack: "Noodl App, Strapi, React Native",
      date: "12/2024",
    },
    {
      id: crypto.randomUUID(),
      role: "Full-stack",
      title: "Nền tảng học tập trực tuyến LMS - Knowhub",
      github:
        "https://github.com/phamhuulocforwork/cn-da21ttb-phamhuuloc-lms-knowhub-nextjs",
      description:
        "Xây dựng website cho phép giảng viên tạo và quản lý khóa học, bài kiểm tra, wiki; học viên có thể học và làm bài kiểm tra.",
      complemention: "",
      work_with: "Công nghệ sử dụng: ",
      stack:
        "Next.js, Zod, Prisma ORM, Shadcn UI, TailwindCSS, Typescript, MySQL, NodeJS (Express)",
      date: "01/2025",
    },
    {
      id: crypto.randomUUID(),
      role: "Full-stack",
      title:
        "Xây dựng cơ chế phát hiện AI-generated code trong bài tập lập trình",
      github:
        "https://github.com/phamhuulocforwork/tn-da21ttb-phamhuuloc-aicodedetect-ml-py",
      description:
        "Xây dựng cơ chế phát hiện AI-generated code trong bài tập lập trình của sinh viên, áp dụng vào hệ thống làm bài tập của sinh viên.",
      complemention: "",
      work_with: "Công nghệ sử dụng: ",
      stack: "Next.js, Python, FastAPI, lizard",
      date: "05/2025",
    },
  ],
  experiences: [
    {
      id: crypto.randomUUID(),
      company: "Công ty TNHH Công nghệ Anh Quân (AQTech)",
      locale: "8/24 Nguyễn Đình Khơi, Phường 4, Quận Tân Bình, TP. HCM",
      title: "Thực tập sinh FE",
      description: "Các dự án đã thực hiện:",
      projects: [
        {
          id: crypto.randomUUID(),
          label: "AQ EduSmart",
          description:
            "Tham gia vào nhiều dự án giải pháp quản lý đào tạo cho các cơ sở giáo dục ở Việt Nam thuộc hệ sinh thái AQ EduSmart.",
        },
      ],
      complemention: "",
      work_with: "Công nghệ sử dụng: ",
      stack: "Next.js, Typescript, Mantine UI, Zustand, Tanstack Query",
      date: "03/2025 - nay",
    },
  ],
};
