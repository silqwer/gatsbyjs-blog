import React from 'react';
import { Link } from 'gatsby';

interface PostCardProps {
  title: string;
  date: string;
  slug: string;
  excerpt?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  date,
  slug,
  excerpt,
  category,
  tags,
  featured = false,
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article
      className={`
        bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 
        hover:shadow-lg hover:-translate-y-1 border-l-4 
        ${featured ? 'border-l-blue-500' : 'border-l-gray-300'}
      `}
    >
      <div className='p-6'>
        {/* 카테고리 및 날짜 */}
        <div className='flex items-center justify-between mb-3'>
          {category && (
            <span className='inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full'>
              {category}
            </span>
          )}
          <time className='text-sm text-gray-500' dateTime={date}>
            {formatDate(date)}
          </time>
        </div>

        {/* 제목 */}
        <h2 className='text-xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors'>
          <Link to={`/blog/${slug}`} className='no-underline'>
            {title}
          </Link>
        </h2>

        {/* 요약 */}
        {excerpt && (
          <p className='text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3'>
            {excerpt}
          </p>
        )}

        {/* 태그 */}
        {tags && tags.length > 0 && (
          <div className='flex flex-wrap gap-2 mb-4'>
            {tags.map(tag => (
              <span
                key={tag}
                className='inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded'
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* 더 읽기 링크 */}
        <Link
          to={`/blog/${slug}`}
          className='inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors'
        >
          더 읽기
          <svg
            className='w-4 h-4 ml-1'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
