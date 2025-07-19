import React from 'react';
import { graphql, Link, type HeadFC, type PageProps } from 'gatsby';
import DefaultLayout from '@/layouts/DefaultLayout';
import PostList from '@/components/Blog/PostList';
import SEO from '@/components/Common/SEO';

interface HomePageData {
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

const IndexPage: React.FC<PageProps<HomePageData>> = ({ data }) => {
  const posts = data.allMdx.nodes;
  const recentPosts = posts.slice(0, 6); // 최근 6개 포스트만

  return (
    <DefaultLayout>
      {/* 히어로 섹션 */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg mb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            안녕하세요! 👋
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            여기는 <strong>용호님의 개발 블로그</strong>입니다.<br />
            프론트엔드, 백엔드, 그리고 개발에 대한 모든 이야기를 담고 있어요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              블로그 보기
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              소개 보기
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* 최근 게시글 섹션 */}
        {recentPosts.length > 0 ? (
          <>
            <PostList
              posts={recentPosts}
              title="📚 최근 게시글"
            />
            <div className="text-center mt-8">
              <Link
                to="/blog"
                className="inline-flex items-center px-6 py-3 text-blue-600 font-medium border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                모든 게시글 보기
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </>
        ) : (
          <section className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-3">곧 멋진 글들이 올라올 예정이에요!</h2>
            <p className="text-gray-500">
              개발 경험과 지식을 공유할 준비를 하고 있습니다. 기대해 주세요! 🚀
            </p>
          </section>
        )}

        {/* 소개 섹션 */}
        <section className="py-16 border-t border-gray-200 mt-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">개발 경험</h3>
              <p className="text-gray-600">
                실무에서 겪은 다양한 개발 경험과 문제 해결 과정을 공유합니다.
              </p>
            </div>
            <div className="p-6">
              <div className="text-green-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">기술 탐구</h3>
              <p className="text-gray-600">
                새로운 기술과 트렌드를 탐구하고 실제 프로젝트에 적용한 후기를 나눕니다.
              </p>
            </div>
            <div className="p-6">
              <div className="text-purple-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">함께 성장</h3>
              <p className="text-gray-600">
                개발자로서 함께 성장하고, 서로의 경험을 나누며 발전해나가요.
              </p>
            </div>
          </div>
        </section>
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

export const Head: HeadFC = () => (
  <SEO
    title="용호님의 개발 블로그"
    description="프론트엔드, 백엔드, 그리고 개발에 대한 모든 이야기를 담은 블로그입니다."
    keywords={['개발 블로그', '용호', 'silqwer', 'frontend', 'backend', 'javascript', 'typescript']}
  />
);
