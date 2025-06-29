import React from 'react';

import { Link } from 'gatsby';

export default function Header() {
  return (
    <header className='bg-slate-800 text-white px-6 py-4'>
      <div className='max-w-4xl mx-auto flex justify-between items-center'>
        <Link to='/' className='text-xl font-bold'>
          Yongho's Blog
        </Link>
        <nav className='space-x-4'>
          <Link to='/' className='hover:underline'>
            Home
          </Link>
          <Link to='/about' className='hover:underline'>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
