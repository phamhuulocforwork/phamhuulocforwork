"use client";

import React from "react";

import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

const GithubCal = () => {
  const { theme } = useTheme();

  const colorScheme = theme === "dark" ? "dark" : "light";

  return (
    <section
      id='skills'
      className='w-full max-w-screen-xl mx-auto py-6 xs:py-12 px-6'
    >
      <div className='mt-5 flex items-center justify-center'>
        <GitHubCalendar
          colorScheme={colorScheme}
          username='phamhuulocforwork'
          showWeekdayLabels={true}
        />
      </div>
    </section>
  );
};

export default GithubCal;
