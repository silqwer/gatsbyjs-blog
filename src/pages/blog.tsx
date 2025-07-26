import React from 'react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import DefaultLayout from '@/layouts/DefaultLayout';
import PostList from '@/components/Blog/PostList';
import SEO from '@/components/Common/SEO';

interface BlogPageData {
  allMdx: {
    nodes: Array<{
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
    }>;
  };
}

const BlogPage: React.FC<PageProps<BlogPageData>> = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <DefaultLayout>
      <div className='max-w-6xl mx-auto px-4 py-8'>
        {/* 헤더 섹션 */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>개발 블로그</h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            프론트엔드, 백엔드, 그리고 개발에 대한 모든 이야기를 담고 있습니다.
            함께 성장해나가요! 🚀
          </p>
        </div>

        {/* 추천 게시글 섹션 */}
        <PostList posts={posts} showFeatured={true} title='⭐ 추천 게시글' />

        {/* 전체 게시글 섹션 */}
        <PostList posts={posts} title='📝 모든 게시글' />
      </div>
    </DefaultLayout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          date
          slug
          excerpt
          category
          tags
          featured
        }
      }
    }
  }
`;

export const Head: HeadFC<BlogPageData> = () => (
  <SEO
    title='블로그'
    description='프론트엔드, 백엔드, 그리고 개발에 대한 모든 이야기를 담은 블로그입니다.'
    keywords={[
      '개발 블로그',
      'frontend',
      'backend',
      'javascript',
      'typescript',
      'react',
    ]}
    url='/blog'
  />
);

export default BlogPage;
