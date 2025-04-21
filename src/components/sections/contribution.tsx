"use client";

import GithubContributionChart from "@/components/github-contribution-chart";

const mockData = Array.from({ length: 365 }, (_, i) => ({
  week: Math.floor(i / 7),
  day: i % 7,
  value: Math.floor(Math.random() * 10),
}));

export default function Contribution() {
  return (
    <section>
      <GithubContributionChart data={mockData} />
    </section>
  );
}
