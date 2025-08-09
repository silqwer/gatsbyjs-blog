import React, { useState } from 'react';

import SocialMedia from './social/SocialMedia';
import DarkModeToggle from './button/DarkModeToggle';
import MobileMenu from './menu/MobileMenu';

type Props = {
  navigateToHome: () => void;
  navigateToAllPosts: () => void;
  navigateToDevTalks: () => void;
  navigateToAbout: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export default function Header({
  navigateToHome,
  navigateToAllPosts,
  navigateToDevTalks,
  navigateToAbout,
  isDarkMode,
  toggleDarkMode,
}: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className='border-b border-border bg-background sticky top-0 z-40'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-4'>
            {/* Logo */}
            <button
              onClick={navigateToHome}
              className='text-foreground text-2xl font-semibold uppercase tracking-tight hover:opacity-70 transition-opacity'
            >
              Dev Blog
            </button>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center gap-6'>
              <nav className='flex gap-6'>
                <button
                  onClick={navigateToAllPosts}
                  className='text-foreground text-xl hover:opacity-70 transition-opacity'
                >
                  Posts
                </button>
                <button
                  onClick={navigateToDevTalks}
                  className='text-foreground text-xl hover:opacity-70 transition-opacity'
                >
                  Dev Talks
                </button>
                <button
                  onClick={navigateToAbout}
                  className='text-foreground text-xl hover:opacity-70 transition-opacity'
                >
                  About
                </button>
              </nav>
              <div className='w-4 h-px bg-border'></div>
              <SocialMedia />
              <DarkModeToggle
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden flex items-center gap-3'>
              <DarkModeToggle
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
              <button
                onClick={toggleMobileMenu}
                className='p-2 text-foreground hover:bg-muted rounded-lg transition-colors'
                aria-label='Toggle mobile menu'
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        navigateToHome={navigateToHome}
        navigateToAllPosts={navigateToAllPosts}
        navigateToDevTalks={navigateToDevTalks}
        navigateToAbout={navigateToAbout}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </>
  );
}
