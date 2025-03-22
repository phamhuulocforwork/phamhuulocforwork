import { ReactNode } from "react";

export default function CurriculumLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return <div>{children}</div>;
}
