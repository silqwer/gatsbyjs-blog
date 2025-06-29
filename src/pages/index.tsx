import * as React from 'react';
import type { HeadFC } from 'gatsby';

import DefaultLayout from '@/layouts/DefaultLayout';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <h1 className='text-3xl font-bold mb-4'>안녕하세요! 👋</h1>
      <p className='text-lg'>
        여기는 용호님의 개발 블로그입니다. 곧 멋진 글들이 올라올 예정이에요!
      </p>
    </DefaultLayout>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
