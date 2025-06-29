import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-slate-100 text-sm text-center py-4 mt-10'>
      © {new Date().getFullYear()} Yongho Kim. All rights reserved.
    </footer>
  );
}
