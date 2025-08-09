import React, { useEffect } from 'react';

import DarkModeToggle from '@/components/button/DarkModeToggle';
import SocialMedia from '@/components/social/SocialMedia';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  navigateToHome: () => void;
  navigateToAllPosts: () => void;
  navigateToDevTalks: () => void;
  navigateToAbout: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export default function MobileMenu({
  isOpen,
  onClose,
  navigateToHome,
  navigateToAllPosts,
  navigateToDevTalks,
  navigateToAbout,
  isDarkMode,
  toggleDarkMode,
}: Props) {
  const menuItems = [
    { label: 'Home', action: navigateToHome },
    { label: 'Posts', action: navigateToAllPosts },
    { label: 'Dev Talks', action: navigateToDevTalks },
    { label: 'About', action: navigateToAbout },
  ];

  const handleMenuItemClick = (action: () => void) => {
    action();
    onClose();
  };

  // 메뉴가 열릴 때 body 스크롤 비활성화
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // 메뉴 닫기 키 이벤트
  useEffect(() => {
    const handleEscape = (e: any) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 md:hidden'>
      {/* Overlay */}
      <div
        className='fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300'
        onClick={onClose}
      />

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background border-l border-border shadow-xl transform transition-transform duration-300 ease-in-out 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Menu Header */}
        <div className='flex items-center justify-between p-6 border-b border-border'>
          <button
            onClick={() => handleMenuItemClick(navigateToHome)}
            className='text-foreground text-xl font-semibold uppercase tracking-tight'
          >
            Dev Blog
          </button>
          <button
            onClick={onClose}
            className='p-2 text-foreground hover:bg-muted rounded-lg transition-colors'
            aria-label='Close menu'
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
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className='flex flex-col h-full'>
          {/* Navigation Items */}
          <nav className='flex-1 px-6 py-8'>
            <div className='space-y-6'>
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleMenuItemClick(item.action)}
                  className='block w-full text-left text-2xl font-semibold text-foreground hover:text-muted-foreground transition-colors py-2'
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Bottom Section */}
          <div className='px-6 py-6 border-t border-border space-y-6'>
            {/* Dark Mode Toggle */}
            <div className='flex items-center justify-between'>
              <span className='text-foreground font-medium'>Dark Mode</span>
              <DarkModeToggle
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            </div>

            {/* Social Links */}
            <div className='space-y-3'>
              <p className='text-sm font-medium text-foreground uppercase tracking-wide'>
                Follow Us
              </p>
              <SocialMedia />
            </div>

            {/* Newsletter */}
            <div className='space-y-3'>
              <p className='text-sm font-medium text-foreground uppercase tracking-wide'>
                Newsletter
              </p>
              <div className='flex gap-2'>
                <input
                  type='email'
                  placeholder='Email'
                  className='flex-1 px-3 py-2 text-sm bg-muted border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring'
                />
                <button className='px-4 py-2 bg-foreground text-background text-sm font-medium rounded-md hover:opacity-90 transition-opacity'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
