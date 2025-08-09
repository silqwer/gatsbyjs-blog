import React from 'react';

import SocialMedia from './social/SocialMedia';

type Props = {
  navigateToHome: () => void;
  navigateToAllPosts: () => void;
};

export default function Footer({ navigateToHome }: Props) {
  return (
    <footer className='bg-foreground text-background'>
      {/* Newsletter Ticker */}
      <div className='border-b border-background/20'>
        <div className='py-5 overflow-hidden'>
          <div className='flex gap-6 items-center whitespace-nowrap animate-pulse'>
            {[
              'Subscribe+++',
              'New Posts+++',
              'Tech Insights+++',
              'Code Tips+++',
            ].map((item, index) => (
              <span
                key={index}
                className='text-xl sm:text-2xl font-semibold uppercase'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-24'>
          <div>
            <button
              onClick={navigateToHome}
              className='text-2xl font-semibold uppercase mb-6 hover:opacity-70 transition-opacity text-background'
            >
              Dev Blog
            </button>
          </div>

          <div className='space-y-3'>
            <div className='h-px bg-background/20 mb-6'></div>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              Frontend
            </button>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              Backend
            </button>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              DevOps
            </button>
          </div>

          <div className='space-y-3'>
            <div className='h-px bg-background/20 mb-6'></div>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              Tutorials
            </button>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              Projects
            </button>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              About
            </button>
          </div>

          <div className='space-y-3'>
            <div className='h-px bg-background/20 mb-6'></div>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              Resources
            </button>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              Contact
            </button>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              Resume
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
          <p className='text-sm text-background/70'>
            © 2025 Dev Blog - Built with React & TypeScript
          </p>
          <SocialMedia color='text-background' />
        </div>
      </div>
    </footer>
  );
}
