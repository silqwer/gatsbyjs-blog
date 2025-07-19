import React from 'react';
import { graphql, Link, type HeadFC, type PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import DefaultLayout from '@/layouts/DefaultLayout';
import SEO from '@/components/Common/SEO';

interface BlogPostData {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
      slug: string;
      excerpt?: string;
      category?: string;
      tags?: string[];
    };
    body: string;
  };
}

const BlogPost: React.FC<PageProps<BlogPostData>> = ({ data }) => {
  const { frontmatter, body } = data.mdx;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <DefaultLayout>
      <article className='max-w-4xl mx-auto px-4 py-8'>
        {/* 브레드크럼 */}
        <nav className='flex items-center space-x-2 text-sm text-gray-500 mb-8'>
          <Link to='/' className='hover:text-blue-600'>
            홈
          </Link>
          <span>›</span>
          <Link to='/blog' className='hover:text-blue-600'>
            블로그
          </Link>
          <span>›</span>
          <span className='text-gray-700'>{frontmatter.title}</span>
        </nav>

        {/* 포스트 헤더 */}
        <header className='mb-12'>
          {frontmatter.category && (
            <div className='mb-4'>
              <span className='inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full'>
                {frontmatter.category}
              </span>
            </div>
          )}

          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
            {frontmatter.title}
          </h1>

          <div className='flex items-center justify-between border-b border-gray-200 pb-6'>
            <div className='flex items-center space-x-4 text-gray-600'>
              <div className='flex items-center'>
                <svg
                  className='w-5 h-5 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
                <time dateTime={frontmatter.date}>
                  {formatDate(frontmatter.date)}
                </time>
              </div>

              <div className='flex items-center'>
                <svg
                  className='w-5 h-5 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
                <span>용호</span>
              </div>
            </div>

            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className='flex flex-wrap gap-2'>
                {frontmatter.tags.map(tag => (
                  <span
                    key={tag}
                    className='inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded'
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* 포스트 내용 */}
        <div className='prose prose-lg max-w-none'>
          <div className='markdown-content'>
            <MDXProvider
              components={{
                h1: ({ children }) => (
                  <h1 className='text-3xl font-bold mt-8 mb-4 text-gray-900'>
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className='text-2xl font-bold mt-6 mb-3 text-gray-900'>
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className='text-xl font-bold mt-4 mb-2 text-gray-900'>
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className='mb-4 leading-relaxed text-gray-700'>
                    {children}
                  </p>
                ),
                code: ({ children, className }) => {
                  const isInlineCode = !className;
                  if (isInlineCode) {
                    return (
                      <code className='bg-gray-100 text-red-600 px-1 py-0.5 rounded text-sm'>
                        {children}
                      </code>
                    );
                  }
                  return <code className={className}>{children}</code>;
                },
                pre: ({ children }) => (
                  <pre className='bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4'>
                    {children}
                  </pre>
                ),
                blockquote: ({ children }) => (
                  <blockquote className='border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4'>
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => (
                  <ul className='list-disc pl-6 mb-4 space-y-1'>{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className='list-decimal pl-6 mb-4 space-y-1'>
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className='text-gray-700'>{children}</li>
                ),
              }}
            >
              {body}
            </MDXProvider>
          </div>
        </div>

        {/* 포스트 하단 네비게이션 */}
        <footer className='mt-16 pt-8 border-t border-gray-200'>
          <div className='flex justify-between items-center'>
            <Link
              to='/blog'
              className='inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors'
            >
              <svg
                className='w-5 h-5 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 19l-7-7m0 0l7-7m-7 7h18'
                />
              </svg>
              모든 글 보기
            </Link>

            <div className='text-center'>
              <p className='text-gray-600 text-sm'>
                이 글이 도움이 되셨나요? 피드백을 남겨주세요! 😊
              </p>
            </div>
          </div>
        </footer>
      </article>
    </DefaultLayout>
  );
};

export const query = graphql`
  query BlogPost($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        slug
        excerpt
        category
        tags
      }
      body
    }
  }
`;

export const Head: HeadFC<BlogPostData> = ({ data }) => {
  const { frontmatter } = data.mdx;

  return (
    <SEO
      title={frontmatter.title}
      description={
        frontmatter.excerpt || `${frontmatter.title}에 대한 블로그 글입니다.`
      }
      keywords={frontmatter.tags || []}
      url={`/blog/${frontmatter.slug}`}
      type='article'
      publishedTime={frontmatter.date}
    />
  );
};

export default BlogPost;
