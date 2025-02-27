import { Goal } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const blogs = [
  {
    icon: Goal,
    title: "Blog 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    icon: Goal,
    title: "Blog 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    icon: Goal,
    title: "Blog 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    icon: Goal,
    title: "Blog 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    icon: Goal,
    title: "Blog 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    icon: Goal,
    title: "Blog 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

export default function Blogs() {
  return (
    <div
      id='blogs'
      className='max-w-screen-xl mx-auto w-full py-12 xs:py-20 px-6'
    >
      <h2 className='text-3xl xs:text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto'>
        Blogs
      </h2>
      <div className='mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12'>
        {blogs.map((feature) => (
          <Card
            key={feature.title}
            className='flex flex-col border rounded-xl overflow-hidden shadow-none'
          >
            <CardHeader>
              <feature.icon />
              <h4 className='!mt-3 text-xl font-bold tracking-tight'>
                {feature.title}
              </h4>
              <p className='mt-1 text-muted-foreground text-sm xs:text-[17px]'>
                {feature.description}
              </p>
            </CardHeader>
            <CardContent className='mt-auto px-0 pb-0'>
              <div className='bg-muted h-52 ml-6 rounded-tl-xl' />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
