import React from 'react';
import PostCard from './PostCard';

interface BlogPost {
  id: string;
  frontmatter: {
    title: string;
    date: string;
    slug: string;
    excerpt?: string;
    category?: string;
    tags?: string[];
    featured?: boolean;
  };
}

interface PostListProps {
  posts: BlogPost[];
  showFeatured?: boolean;
  category?: string;
  title?: string;
}

const PostList: React.FC<PostListProps> = ({
  posts,
  showFeatured = false,
  category,
  title = '최근 게시글',
}) => {
  // 필터링 로직
  const filteredPosts = posts.filter(post => {
    if (showFeatured && !post.frontmatter.featured) return false;
    if (category && post.frontmatter.category !== category) return false;
    return true;
  });

  // 날짜순 정렬 (최신 순)
  const sortedPosts = filteredPosts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );

  if (sortedPosts.length === 0) {
    return (
      <section className='py-8'>
        <h2 className='text-2xl font-bold mb-6 text-gray-900'>{title}</h2>
        <div className='text-center py-12'>
          <div className='text-gray-400 mb-4'>
            <svg
              className='w-16 h-16 mx-auto'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1}
                d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              />
            </svg>
          </div>
          <p className='text-gray-500 text-lg'>아직 게시글이 없습니다.</p>
          <p className='text-gray-400 text-sm mt-2'>
            곧 멋진 글들이 올라올 예정이에요!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className='py-8'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-2xl font-bold text-gray-900'>{title}</h2>
        {category && (
          <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm'>
            {category} ({sortedPosts.length})
          </span>
        )}
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {sortedPosts.map(post => (
          <PostCard
            key={post.id}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            slug={post.frontmatter.slug}
            excerpt={post.frontmatter.excerpt}
            category={post.frontmatter.category}
            tags={post.frontmatter.tags}
            featured={post.frontmatter.featured}
          />
        ))}
      </div>
    </section>
  );
};

export default PostList;
