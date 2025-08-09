import React from 'react';

type Props = {
  path: string;
  label: string;
};

export default function SocialIcon({ path, label }: Props) {
  return (
    <div className='relative shrink-0 w-5 h-5' aria-label={label}>
      <svg
        className='block size-full'
        fill='none'
        preserveAspectRatio='none'
        viewBox='0 0 20 20'
      >
        <path d={path} fill='currentColor' />
      </svg>
    </div>
  );
}
