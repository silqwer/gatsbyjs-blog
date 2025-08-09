import svgPaths from '../imports/svg-k6tf0kga7h';
import imgDimitarBelchevFRBpWlAcWiyUnsplash1 from 'figma:asset/10071b39fd6c50f2fa4240d1a47c46609ed23e2c.png';
import imgDiogoNunesWa9IlX9XyoiUnsplash2 from 'figma:asset/7763f958063c2028e42190edd62d4a0340e002f6.png';
import imgFabianBachliA2Zf3FGbdFqUnsplash1 from 'figma:asset/f86398114269db65eff705d2ea34384c1ae42e0b.png';
import imgBirminghamMuseumsTrustTWavMkqCCcUnsplash1 from 'figma:asset/365058fa09987f0c4325269da0a66a5961e6fbe1.png';
import imgAmeliaBrownYWNiCZw5YpsUnsplash1 from 'figma:asset/002ef2bcb93b666147811f67c488a658712aebe8.png';
import imgSimonSunPLaiSojR78Unsplash1 from 'figma:asset/4d90834aca856f64aea37ad53668901447a777fb.png';
import imgSerhiiTyaglovskyLCdhTocNrt4Unsplash1 from 'figma:asset/c4320a558181887baf8298fb59c70dbe4ff52a99.png';
import imgMojtabaMosayebzadehV9MVxykGyxcUnsplash1 from 'figma:asset/fbd6af37ad3fef0bf8ece9eafb930e8918e87eee.png';
import Header from './Header';

// Social Icons
function SocialIcon({ path, label }) {
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

function Social({ color = 'text-foreground' }) {
  return (
    <div className={`flex gap-3 ${color}`}>
      <SocialIcon path={svgPaths.p1305e900} label='Instagram' />
      <SocialIcon path={svgPaths.p3fd3a000} label='Twitter' />
      <SocialIcon path={svgPaths.pdb0b000} label='YouTube' />
      <SocialIcon path={svgPaths.p8693780} label='RSS' />
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 bg-background'>
      <h1 className='text-4xl sm:text-6xl lg:text-8xl font-semibold uppercase text-foreground leading-tight'>
        Code & Create
      </h1>
    </div>
  );
}

// News Ticker
function NewsTicker() {
  return (
    <div className='bg-foreground'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-5 overflow-hidden'>
          <div className='flex gap-6 items-center text-background'>
            <span className='text-xl sm:text-2xl font-semibold uppercase whitespace-nowrap'>
              Latest Updates+++
            </span>
            <div className='flex gap-6 text-lg sm:text-xl whitespace-nowrap'>
              <span>New React 19 features explored +++</span>
              <span>TypeScript 5.4 deep dive +++</span>
              <span>Node.js performance tips +++</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Lead Article
function LeadArticle({ navigateToPostDetail }) {
  const handleReadMore = () => {
    navigateToPostDetail({
      title: 'Building the future with code',
      description:
        "Explore cutting-edge development techniques, learn new technologies, and discover how to build applications that shape tomorrow's digital landscape. From React to AI integration.",
      author: 'Alex Kim',
      date: 'Dec 15, 2024',
      readTime: '8 Min',
      category: 'React',
      image: imgDimitarBelchevFRBpWlAcWiyUnsplash1,
    });
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 bg-background'>
      <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8 sm:mb-12'>
        <div>
          <button
            onClick={handleReadMore}
            className='text-left hover:opacity-70 transition-opacity'
          >
            <h2 className='text-4xl sm:text-6xl lg:text-7xl font-semibold uppercase text-foreground leading-tight'>
              Building the future with code
            </h2>
          </button>
        </div>

        <div className='flex flex-col justify-end gap-8 sm:gap-16'>
          <p className='text-lg text-foreground leading-relaxed'>
            Explore cutting-edge development techniques, learn new technologies,
            and discover how to build applications that shape tomorrow's digital
            landscape. From React to AI integration.
          </p>

          <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
            <div className='flex flex-wrap gap-4 sm:gap-6 text-sm text-foreground'>
              <div className='flex gap-2'>
                <span className='font-semibold'>Author</span>
                <span>Alex Kim</span>
              </div>
              <div className='flex gap-2'>
                <span className='font-semibold'>Date</span>
                <span>Dec 15, 2024</span>
              </div>
              <div className='flex gap-2'>
                <span className='font-semibold'>Duration</span>
                <span>8 Min</span>
              </div>
            </div>

            <div className='inline-flex items-center px-3 py-2 border border-border rounded-full bg-background'>
              <span className='text-xs uppercase font-normal text-foreground'>
                React
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleReadMore}
        className='w-full hover:opacity-70 transition-opacity'
      >
        <div className='aspect-video w-full overflow-hidden'>
          <img
            src={imgDimitarBelchevFRBpWlAcWiyUnsplash1}
            alt='Building the future with code'
            className='w-full h-full object-cover'
          />
        </div>
      </button>
    </div>
  );
}

// Blog Post Component
function BlogPost({
  title,
  description,
  author,
  date,
  readTime,
  category,
  image,
  navigateToPostDetail,
}) {
  const handleClick = () => {
    navigateToPostDetail({
      title,
      description,
      author,
      date,
      readTime,
      category,
      image,
    });
  };

  return (
    <article
      className='flex flex-col lg:flex-row gap-6 lg:gap-12 cursor-pointer hover:opacity-70 transition-opacity'
      onClick={handleClick}
    >
      <div className='lg:w-60 lg:h-60 w-full aspect-square overflow-hidden flex-shrink-0'>
        <img src={image} alt={title} className='w-full h-full object-cover' />
      </div>

      <div className='flex-1 flex flex-col justify-between'>
        <div className='space-y-3'>
          <h3 className='text-2xl sm:text-3xl font-semibold leading-tight text-foreground'>
            {title}
          </h3>
          <p className='text-base leading-relaxed text-muted-foreground'>
            {description}
          </p>
        </div>

        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6'>
          <div className='flex flex-wrap gap-4 sm:gap-6 text-sm text-foreground'>
            <div className='flex gap-2'>
              <span className='font-semibold'>Author</span>
              <span>{author}</span>
            </div>
            <div className='flex gap-2'>
              <span className='font-semibold'>Date</span>
              <span>{date}</span>
            </div>
            <div className='flex gap-2'>
              <span className='font-semibold'>Read</span>
              <span>{readTime}</span>
            </div>
          </div>

          <div className='inline-flex items-center px-3 py-2 border border-border rounded-full w-fit bg-background'>
            <span className='text-xs uppercase text-foreground'>
              {category}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

// Sidebar Components
function FeaturedProject() {
  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <p className='text-base font-semibold uppercase text-foreground'>
          Featured Project
        </p>
        <h3 className='text-4xl sm:text-5xl font-semibold leading-tight text-foreground'>
          TaskFlow
        </h3>
      </div>

      <div className='space-y-4'>
        <div className='aspect-[4/5] w-full overflow-hidden relative'>
          <img
            src={imgMojtabaMosayebzadehV9MVxykGyxcUnsplash1}
            alt='TaskFlow Project'
            className='w-full h-full object-cover'
          />
          <div className='absolute top-6 left-6 text-white'>
            <p className='text-6xl sm:text-7xl font-semibold uppercase leading-none'>
              Task
            </p>
          </div>
          <div className='absolute top-28 left-8 text-white'>
            <p className='text-xl font-semibold uppercase'>Full Stack</p>
          </div>
          <div className='absolute bottom-12 left-8 text-white'>
            <p className='text-xl font-semibold uppercase'>React App</p>
          </div>
        </div>

        <button className='w-full bg-foreground text-background py-3 px-6 uppercase text-sm font-medium hover:opacity-90 transition-colors'>
          View Project
        </button>
      </div>
    </div>
  );
}

function PopularPosts({ navigateToPostDetail }) {
  const posts = [
    {
      title: 'React Hooks Masterclass',
      author: 'Alex Kim',
      description:
        'Master advanced React Hooks patterns including custom hooks, performance optimization, and state management techniques.',
      date: 'Nov 25, 2024',
      readTime: '9 Min',
      category: 'React',
      image: imgDiogoNunesWa9IlX9XyoiUnsplash2,
    },
    {
      title: 'JavaScript Performance Optimization',
      author: 'Sarah Chen',
      description:
        'Learn advanced techniques to optimize JavaScript performance, reduce bundle sizes, and improve runtime efficiency.',
      date: 'Nov 20, 2024',
      readTime: '11 Min',
      category: 'JavaScript',
      image: imgFabianBachliA2Zf3FGbdFqUnsplash1,
    },
    {
      title: 'Next.js 14 Complete Guide',
      author: 'Mike Johnson',
      description:
        'Comprehensive guide to Next.js 14 including App Router, Server Actions, and the latest performance optimizations.',
      date: 'Nov 15, 2024',
      readTime: '16 Min',
      category: 'React',
      image: imgBirminghamMuseumsTrustTWavMkqCCcUnsplash1,
    },
  ];

  return (
    <div className='space-y-6'>
      <p className='text-base font-semibold uppercase text-foreground'>
        Most Popular
      </p>

      <div className='space-y-6'>
        {posts.map((post, index) => (
          <div key={index}>
            <button
              onClick={() => navigateToPostDetail(post)}
              className='text-left hover:opacity-70 transition-opacity w-full'
            >
              <div className='flex gap-4'>
                <span className='text-2xl font-semibold w-12 flex-shrink-0 text-foreground'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className='space-y-4'>
                  <h4 className='text-xl sm:text-2xl font-semibold leading-tight text-foreground'>
                    {post.title}
                  </h4>
                  <div className='flex gap-2 text-sm text-foreground'>
                    <span className='font-semibold'>Author</span>
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </button>
            {index < posts.length - 1 && (
              <div className='h-px bg-border mt-6'></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsletterSidebar() {
  return (
    <div className='bg-muted p-6 sm:p-8'>
      <div className='space-y-6'>
        <div className='space-y-2'>
          <p className='text-base font-semibold uppercase text-foreground'>
            Newsletter
          </p>
          <h3 className='text-2xl sm:text-3xl font-semibold leading-tight text-foreground'>
            Tech insights to your inbox
          </h3>
        </div>

        <div className='space-y-3'>
          <input
            type='email'
            placeholder='Email'
            className='w-full px-4 py-3 bg-background text-foreground text-base border border-border rounded-md'
          />
          <button className='w-full bg-foreground text-background py-3 px-6 uppercase text-sm font-medium hover:opacity-90 transition-colors rounded-md'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Blog Posts Section
function BlogPostsSection({ navigateToAllPosts, navigateToPostDetail }) {
  const posts = [
    {
      title: 'React Server Components Deep Dive',
      description:
        "Understanding the architecture and benefits of React Server Components, and how they're changing the way we build web applications.",
      author: 'Alex Kim',
      date: 'Dec 10, 2024',
      readTime: '5 Min',
      category: 'React',
      image: imgDiogoNunesWa9IlX9XyoiUnsplash2,
    },
    {
      title: 'TypeScript Best Practices 2024',
      description:
        'Essential TypeScript patterns and techniques that every developer should know to write maintainable and type-safe code.',
      author: 'Sarah Chen',
      date: 'Dec 8, 2024',
      readTime: '7 Min',
      category: 'TypeScript',
      image: imgFabianBachliA2Zf3FGbdFqUnsplash1,
    },
    {
      title: 'Building Scalable APIs with Node.js',
      description:
        'Learn how to design and implement robust, scalable REST APIs using Node.js, Express, and modern development practices.',
      author: 'Mike Johnson',
      date: 'Dec 5, 2024',
      readTime: '10 Min',
      category: 'Backend',
      image: imgBirminghamMuseumsTrustTWavMkqCCcUnsplash1,
    },
    {
      title: 'CSS Grid vs Flexbox: When to Use What',
      description:
        'A comprehensive guide to understanding the differences between CSS Grid and Flexbox, with practical examples and use cases.',
      author: 'Emma Davis',
      date: 'Dec 3, 2024',
      readTime: '6 Min',
      category: 'CSS',
      image: imgAmeliaBrownYWNiCZw5YpsUnsplash1,
    },
    {
      title: 'Modern JavaScript Testing Strategies',
      description:
        'Explore the latest testing frameworks and methodologies for JavaScript applications, from unit tests to end-to-end testing.',
      author: 'David Park',
      date: 'Dec 1, 2024',
      readTime: '8 Min',
      category: 'Testing',
      image: imgSimonSunPLaiSojR78Unsplash1,
    },
    {
      title: 'WebAssembly: The Future of Web Performance',
      description:
        'Discover how WebAssembly is revolutionizing web performance and opening new possibilities for web applications.',
      author: 'Lisa Wong',
      date: 'Nov 28, 2024',
      readTime: '12 Min',
      category: 'WebAssembly',
      image: imgSerhiiTyaglovskyLCdhTocNrt4Unsplash1,
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 bg-background'>
      <div className='grid lg:grid-cols-3 gap-8 lg:gap-16'>
        {/* Main Content */}
        <div className='lg:col-span-2 space-y-12'>
          {posts.map((post, index) => (
            <div key={index}>
              <BlogPost {...post} navigateToPostDetail={navigateToPostDetail} />
              {index < posts.length - 1 && (
                <div className='h-px bg-border mt-12'></div>
              )}
            </div>
          ))}

          {/* View All Posts Button */}
          <button
            onClick={navigateToAllPosts}
            className='flex items-center gap-2 pt-8 hover:opacity-70 transition-opacity'
          >
            <span className='text-base font-semibold uppercase text-foreground'>
              All Posts
            </span>
            <svg
              className='w-6 h-6 text-foreground'
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
          </button>
        </div>

        {/* Sidebar */}
        <div className='space-y-16'>
          <FeaturedProject />
          <PopularPosts navigateToPostDetail={navigateToPostDetail} />
          <NewsletterSidebar />
        </div>
      </div>
    </div>
  );
}

// Footer Newsletter
function FooterNewsletter() {
  return (
    <div className='text-center py-16 sm:py-32'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl sm:text-6xl lg:text-7xl font-semibold uppercase text-muted leading-tight mb-8'>
          Tech insights to your inbox
        </h2>

        <div className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
          <input
            type='email'
            placeholder='Email'
            className='flex-1 px-4 py-3 text-base bg-background text-foreground border border-border rounded-md'
          />
          <button className='bg-background text-foreground px-6 py-3 uppercase text-sm font-medium hover:opacity-70 transition-colors border border-border rounded-md'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

// Footer
function Footer({ navigateToHome, navigateToAllPosts }) {
  return (
    <footer className='bg-foreground text-background'>
      {/* Newsletter Ticker */}
      <div className='border-b border-background/20'>
        <div className='py-5 overflow-hidden'>
          <div className='flex gap-6 items-center whitespace-nowrap animate-pulse'>
            {[
              'Subscribe+++',
              'New Posts+++',
              'Tech Insights+++',
              'Code Tips+++',
            ].map((item, index) => (
              <span
                key={index}
                className='text-xl sm:text-2xl font-semibold uppercase'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <FooterNewsletter />

      {/* Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-24'>
          <div>
            <button
              onClick={navigateToHome}
              className='text-2xl font-semibold uppercase mb-6 hover:opacity-70 transition-opacity text-background'
            >
              Dev Blog
            </button>
          </div>

          <div className='space-y-3'>
            <div className='h-px bg-background/20 mb-6'></div>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              Frontend
            </button>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              Backend
            </button>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              DevOps
            </button>
          </div>

          <div className='space-y-3'>
            <div className='h-px bg-background/20 mb-6'></div>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              Tutorials
            </button>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              Projects
            </button>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              About
            </button>
          </div>

          <div className='space-y-3'>
            <div className='h-px bg-background/20 mb-6'></div>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              Resources
            </button>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              Contact
            </button>
            <button className='block text-base hover:opacity-70 transition-opacity text-left text-background'>
              Resume
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
          <p className='text-sm text-background/70'>
            © 2025 Dev Blog - Built with React & TypeScript
          </p>
          <Social color='text-background' />
        </div>
      </div>
    </footer>
  );
}

export default function DevBlog({
  navigateToHome,
  navigateToAllPosts,
  navigateToDevTalks,
  navigateToAbout,
  navigateToPostDetail,
  isDarkMode,
  toggleDarkMode,
}) {
  return (
    <div className='bg-background min-h-screen'>
      <Header
        navigateToHome={navigateToHome}
        navigateToAllPosts={navigateToAllPosts}
        navigateToDevTalks={navigateToDevTalks}
        navigateToAbout={navigateToAbout}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <HeroSection />
      <NewsTicker />
      <LeadArticle navigateToPostDetail={navigateToPostDetail} />
      <BlogPostsSection
        navigateToAllPosts={navigateToAllPosts}
        navigateToPostDetail={navigateToPostDetail}
      />
      <Footer
        navigateToHome={navigateToHome}
        navigateToAllPosts={navigateToAllPosts}
      />
    </div>
  );
}
