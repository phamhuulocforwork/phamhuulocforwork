import type { CvRegistry } from "@/types/cv.types";

export const registryCvVi: CvRegistry = {
  role: "Lập trình viên FE",
  name: "Phạm Hữu Lộc",
  phone: "(+84) 355-443-403",
  email: "phamhuulocforwork@gmail.com",
  links: {
    github: "https://github.com/phamhuulocforwork",
  },
  updated_at: "Cập nhật lần cuối 08/11/2025",
  bio: "Sinh viên ngành Công nghệ Thông tin tìm kiếm cơ hội học tập, trau dồi kinh nghiệm, phát triển kỹ năng và học hỏi từ môi trường làm việc thực tế.",
  education: [
    {
      id: crypto.randomUUID(),
      school: "Trường Đại học Trà Vinh",
      period: "2021 - 2025 ● GPA 3.17/4.0",
      course: "Ngành Công nghệ Thông tin",
    },
  ],
  certificates: [
    {
      id: crypto.randomUUID(),
      name: "Chứng chỉ thiết kế UX của Google",
      issuer: "Google",
      date: "2024",
      url: "https://coursera.org/verify/professional-cert/HEN60D5H9RJX",
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
      stack: "Next.js, Python, FastAPI, Lizard",
      date: "05/2025",
    },
  ],
  experiences: [
    {
      id: crypto.randomUUID(),
      company: "Công ty TNHH Công nghệ Anh Quân (AQTech)",
      locale: "8/24 Nguyễn Đình Khơi, Phường 4, Quận Tân Bình, TP. HCM",
      title: "Thực tập sinh FE & Cộng tác viên FE",
      description: "Các dự án đã thực hiện:",
      projects: [
        {
          id: crypto.randomUUID(),
          label: "AQ EduLOM",
          description:
            "Hệ thống phần mềm Quản lý chuẩn đầu ra và minh chứng kiểm định – cải tiến chất lượng đáp ứng đủ các yêu cầu của Bộ Giáo dục và Đào tạo theo: Thông tư 12/2017/TT-BGBDT và Thông tư 04/2026/TT-BGBDT cũng như các bộ tiêu chuẩn kiểm định quốc tế như AUN-QA, ABET, FIBAA,...",
        },
        {
          id: crypto.randomUUID(),
          label: "AQ EduSTM",
          description: "Hệ thống quản lý các lớp đào tạo ngắn hạn",
        },
        {
          id: crypto.randomUUID(),
          label: "AQ EduSRM",
          description:
            "Hệ thống quản lý việc thực hiện các hoạt động nghiên cứu khoa học trong cơ sở giáo dục. Quản lý và hỗ trợ nghiên cứu khoa học của giáo viên",
        },
        {
          id: crypto.randomUUID(),
          label: "AQ EduEAQ",
          description:
            "Hệ thống Quản lý minh chứng và hỗ trợ báo cáo kiểm định chất lượng giáo dục cho các cơ sở giáo dục.",
        },
        {
          id: crypto.randomUUID(),
          label: "AQ EduSAE",
          description:
            "Quản lý hoạt động ngoại khóa và điểm rèn luyện cho sinh viên các trường đại học.",
        },
      ],
      complemention:
        "Đóng góp thành công cho hơn 5 hệ thống quản lý giáo dục cấp doanh nghiệp. Tích lũy kinh nghiệm thực tế với hệ sinh thái React và các công cụ quản lý state trong môi trường production.",
      work_with: "Công nghệ sử dụng: ",
      stack:
        "Next.js, Typescript, Mantine UI, Zustand, Tanstack Query, Zod, TailwindCSS",
      date: "03/2025 - nay",
    },
  ],
};
