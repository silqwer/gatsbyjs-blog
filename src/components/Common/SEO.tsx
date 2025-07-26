import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = '용호님의 개발 블로그',
  description = '프론트엔드, 백엔드, 그리고 개발에 대한 모든 이야기를 담은 블로그입니다.',
  keywords = [
    '개발',
    'blog',
    'frontend',
    'backend',
    'javascript',
    'typescript',
  ],
  author = 'silqwer',
  url,
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
}) => {
  const data = useStaticQuery<{
    site: {
      siteMetadata: {
        title: string;
        siteUrl: string;
      };
    };
  }>(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);

  const siteTitle = '용호님의 개발 블로그';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  const siteUrl = data.site.siteMetadata.siteUrl || 'https://silqwer.blog';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const defaultImage = `${siteUrl}/images/og-image.png`;
  const ogImage = image || defaultImage;

  return (
    <>
      {/* 기본 메타 태그 */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords.join(', ')} />
      <meta name='author' content={author} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='robots' content='index, follow' />
      <link rel='canonical' href={fullUrl} />

      {/* Open Graph 메타 태그 */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={fullUrl} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:image:alt' content={title} />
      <meta property='og:site_name' content={siteTitle} />
      <meta property='og:locale' content='ko_KR' />

      {/* Twitter Card 메타 태그 */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:creator' content={`@${author}`} />

      {/* 기사용 추가 메타 태그 */}
      {type === 'article' && (
        <>
          <meta property='article:author' content={author} />
          {publishedTime && (
            <meta property='article:published_time' content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property='article:modified_time' content={modifiedTime} />
          )}
          {keywords.map(keyword => (
            <meta key={keyword} property='article:tag' content={keyword} />
          ))}
        </>
      )}

      {/* JSON-LD 구조화 데이터 */}
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': type === 'article' ? 'BlogPosting' : 'WebSite',
          headline: title,
          description: description,
          url: fullUrl,
          author: {
            '@type': 'Person',
            name: author,
          },
          publisher: {
            '@type': 'Organization',
            name: siteTitle,
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/images/logo.png`,
            },
          },
          image: ogImage,
          ...(publishedTime && { datePublished: publishedTime }),
          ...(modifiedTime && { dateModified: modifiedTime }),
        })}
      </script>
    </>
  );
};

export default SEO;
