"use client";

import { useEffect, useState } from "react";

import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className='fixed size-9 bottom-6 right-6 bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 z-50'
          aria-label='Scroll to top'
        >
          <ArrowUp />
        </Button>
      )}
    </>
  );
}
