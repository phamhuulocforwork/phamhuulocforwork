import LanguageToggle from "@/components/language-toggle";
import ThemeToggle from "@/components/theme-toggle";

import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav className='h-16 bg-background border-b border-accent fixed top-0 left-0 right-0 z-50'>
      <div className='h-full flex items-center justify-between container mx-auto px-4 sm:px-6'>
        <Logo />

        <NavMenu className='hidden md:block' />

        <div className='flex items-center gap-3'>
          <LanguageToggle />
          <ThemeToggle />
          <div className='md:hidden'>
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
