import svgPaths from "../imports/svg-1yu75u2754";
import imgDiogoNunesWa9IlX9XyoiUnsplash1 from "figma:asset/7763f958063c2028e42190edd62d4a0340e002f6.png";
import imgJackFinniganRriAi0NhcbcUnsplash1 from "figma:asset/199d613cfb356aaaf0d48610af6e57b9557d1e32.png";
import imgDimitarBelchevFRBpWlAcWiyUnsplash1 from "figma:asset/10071b39fd6c50f2fa4240d1a47c46609ed23e2c.png";
import imgFabianBachliA2Zf3FGbdFqUnsplash1 from "figma:asset/f86398114269db65eff705d2ea34384c1ae42e0b.png";
import Header from "./Header";

// Social Icons
function SocialIcon({ path, label }) {
  return (
    <div
      className="relative shrink-0 w-5 h-5"
      aria-label={label}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <path d={path} fill="currentColor" />
      </svg>
    </div>
  );
}

function Social({ color = "text-foreground" }) {
  return (
    <div className={`flex gap-3 ${color}`}>
      <SocialIcon path={svgPaths.p1305e900} label="Instagram" />
      <SocialIcon path={svgPaths.p3fd3a000} label="Twitter" />
      <SocialIcon path={svgPaths.pdb0b000} label="YouTube" />
    </div>
  );
}

// Navigation Bar with Go Back button
function NavigationBar({ navigateToAllPosts }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-background">
      <div className="flex justify-between items-center">
        <button
          onClick={navigateToAllPosts}
          className="flex items-center gap-2 hover:opacity-70 transition-opacity text-foreground"
        >
          <svg
            className="w-6 h-6 rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="text-base font-semibold uppercase">
            Go Back
          </span>
        </button>
        <span className="text-2xl font-semibold uppercase text-foreground">
          Tech Blog
        </span>
      </div>
    </div>
  );
}

// Main Article Title
function ArticleTitle({ selectedPost }) {
  const title =
    selectedPost?.title || "React Server Components";
  const description =
    selectedPost?.description ||
    "Understanding the architecture and benefits of React Server Components, and how they're changing the way we build web applications. Explore the new paradigm for server-side rendering.";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 bg-background">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-24">
        <div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-semibold uppercase text-foreground leading-tight">
            {title}
          </h1>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-lg sm:text-xl text-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

// Article Meta Information
function ArticleMeta({ selectedPost }) {
  const author = selectedPost?.author || "Alex Kim";
  const date = selectedPost?.date || "Dec 10, 2024";
  const readTime = selectedPost?.readTime || "8 Min";
  const category = selectedPost?.category || "React";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 bg-background">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-4 sm:gap-8 text-sm text-foreground">
          <div className="flex gap-2">
            <span className="font-semibold">Author</span>
            <span>{author}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">Date</span>
            <span>{date}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">Read</span>
            <span>{readTime}</span>
          </div>
        </div>

        <div className="inline-flex items-center px-3 py-2 border border-border rounded-full w-fit bg-background">
          <span className="text-xs uppercase font-normal text-foreground">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
}

// Hero Image
function HeroImage({ selectedPost }) {
  const image =
    selectedPost?.image || imgDiogoNunesWa9IlX9XyoiUnsplash1;
  const title =
    selectedPost?.title || "React Server Components";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-16 bg-background">
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

// Author Sidebar Component
function AuthorSidebar({ selectedPost }) {
  const author = selectedPost?.author || "Alex Kim";
  const date = selectedPost?.date || "Dec 10, 2024";
  const readTime = selectedPost?.readTime || "8 Min";

  return (
    <div className="space-y-8">
      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 overflow-hidden rounded-full">
          <img
            src={imgJackFinniganRriAi0NhcbcUnsplash1}
            alt={author}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-foreground">
            {author}
          </h3>
        </div>
      </div>

      <div className="h-px bg-border"></div>

      {/* Meta Information */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-foreground">
            Date
          </span>
          <span className="text-foreground">{date}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-foreground">
            Read
          </span>
          <span className="text-foreground">{readTime}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-foreground">
            Share
          </span>
          <Social />
        </div>
      </div>
    </div>
  );
}

// Quote Component
function Quote() {
  return (
    <div className="my-12 py-6">
      <div className="h-px bg-border mb-12"></div>
      <div className="flex gap-6">
        <div className="text-8xl font-semibold leading-none text-foreground">
          "
        </div>
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl sm:text-4xl font-semibold leading-tight text-foreground">
            "Server Components represent a fundamental shift in
            how we think about React applications - bringing the
            best of server and client together."
          </h3>
          <p className="text-sm text-muted-foreground">
            — Dan Abramov, React Team
          </p>
        </div>
      </div>
      <div className="h-px bg-border mt-12"></div>
    </div>
  );
}

// Main Article Content
function ArticleContent({ selectedPost }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 bg-background">
      <div className="grid lg:grid-cols-4 gap-8 lg:gap-16">
        {/* Sidebar */}
        <div className="lg:order-1">
          <div className="lg:sticky lg:top-8">
            <AuthorSidebar selectedPost={selectedPost} />
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 lg:order-2">
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-foreground">
                React Server Components represent one of the
                most significant advances in React since hooks
                were introduced. They fundamentally change how
                we think about server and client boundaries in
                modern web applications, offering unprecedented
                performance benefits and developer experience
                improvements.
              </p>

              <p className="text-foreground">
                Server Components run exclusively on the server
                and never ship JavaScript to the client. This
                means we can access databases, file systems, and
                other server-only resources directly from our
                components, without the need for separate API
                routes or data fetching layers. The result is
                faster initial page loads, reduced bundle sizes,
                and simplified data fetching patterns.
              </p>

              <p className="text-foreground">
                Unlike traditional server-side rendering (SSR),
                Server Components can be re-rendered on the
                server in response to user interactions without
                a full page reload. This creates a seamless
                experience where parts of your UI can be updated
                from the server while maintaining client-side
                interactivity where it's needed.
              </p>
            </div>

            <Quote />

            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-foreground">
                The mental model shift required for Server
                Components is substantial but worthwhile.
                Instead of thinking in terms of client-side
                components that fetch data, we now think about
                server-side components that directly access data
                and client-side components that handle
                interactivity.
              </p>

              <p className="text-foreground">
                This new paradigm enables us to build faster,
                more efficient applications by default. The
                server can do the heavy lifting of data fetching
                and processing, while the client focuses on what
                it does best: providing interactive user
                experiences. The boundary between server and
                client becomes more intentional and
                performance-oriented.
              </p>

              <p className="text-foreground">
                As we continue to adopt Server Components in
                production applications, we're seeing
                significant improvements in Core Web Vitals,
                reduced complexity in data fetching logic, and
                better overall user experiences. The future of
                React applications is looking more
                server-centric, but in the best possible way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Latest Posts Section
function LatestPosts({ navigateToPostDetail }) {
  const latestPosts = [
    {
      title: "TypeScript Best Practices 2024",
      description:
        "Essential TypeScript patterns and techniques that every developer should know to write maintainable and type-safe code.",
      author: "Sarah Chen",
      date: "Dec 8, 2024",
      readTime: "7 Min",
      category: "TypeScript",
      image: imgFabianBachliA2Zf3FGbdFqUnsplash1,
    },
    {
      title: "Building Scalable APIs with Node.js",
      description:
        "Learn how to design and implement robust, scalable REST APIs using Node.js, Express, and modern development practices.",
      author: "Mike Johnson",
      date: "Dec 5, 2024",
      readTime: "10 Min",
      category: "Backend",
      image: imgDimitarBelchevFRBpWlAcWiyUnsplash1,
    },
    {
      title: "Modern JavaScript Testing",
      description:
        "Explore the latest testing frameworks and methodologies for JavaScript applications, from unit tests to end-to-end testing.",
      author: "David Park",
      date: "Dec 1, 2024",
      readTime: "8 Min",
      category: "Testing",
      image: imgDiogoNunesWa9IlX9XyoiUnsplash1,
    },
  ];

  return (
    <div className="bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mb-12">
          <div className="h-px bg-border mb-12"></div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-semibold uppercase leading-tight text-foreground">
              Latest Posts
            </h2>
            <button className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <span className="text-base font-semibold uppercase text-foreground">
                See All
              </span>
              <svg
                className="w-6 h-6 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {latestPosts.map((post, index) => (
            <article
              key={index}
              className="bg-background border border-border cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
              onClick={() => navigateToPostDetail(post)}
            >
              <div className="p-8 sm:p-12 space-y-8">
                {/* Meta info */}
                <div className="flex justify-between items-start">
                  <span className="text-sm text-foreground">
                    {post.date}
                  </span>
                  <div className="inline-flex items-center px-3 py-2 border border-border rounded-full bg-background">
                    <span className="text-xs uppercase text-foreground">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className="aspect-square overflow-hidden rounded-md">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold leading-tight text-foreground">
                    {post.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                </div>

                {/* Author info */}
                <div className="flex gap-4 text-sm text-foreground">
                  <div className="flex gap-2">
                    <span className="font-semibold">
                      Author
                    </span>
                    <span>{post.author}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold">
                      Duration
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer({ navigateToHome }) {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Ticker */}
      <div className="border-b border-background/20">
        <div className="py-5 overflow-hidden">
          <div className="flex gap-6 items-center whitespace-nowrap animate-pulse">
            {[
              "Newsletter+++",
              "Tech Updates+++",
              "Code Tips+++",
              "Dev News+++",
            ].map((item, index) => (
              <span
                key={index}
                className="text-xl sm:text-2xl font-semibold uppercase"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="text-center py-16 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold uppercase text-muted leading-tight mb-8">
            Tech insights to your inbox
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 text-base bg-background text-foreground border border-border rounded-md"
            />
            <button className="bg-background text-foreground px-6 py-3 uppercase text-sm font-medium hover:opacity-70 transition-colors border border-border rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-24">
          <div>
            <button
              onClick={navigateToHome}
              className="text-2xl font-semibold uppercase mb-6 hover:opacity-70 transition-opacity text-background"
            >
              Dev Blog
            </button>
          </div>

          <div className="space-y-3">
            <div className="h-px bg-background/20 mb-6"></div>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">
              Frontend
            </button>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">
              Backend
            </button>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">
              DevOps
            </button>
          </div>

          <div className="space-y-3">
            <div className="h-px bg-background/20 mb-6"></div>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">
              Tutorials
            </button>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">
              Projects
            </button>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">
              About
            </button>
          </div>

          <div className="space-y-3">
            <div className="h-px bg-background/20 mb-6"></div>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">
              Resources
            </button>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">
              Contact
            </button>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">
              Resume
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-sm text-background/70">
            © 2025 Dev Blog - Built with React & TypeScript
          </p>
          <div className="flex gap-3 text-background">
            <SocialIcon
              path={svgPaths.p1305e900}
              label="Instagram"
            />
            <SocialIcon
              path={svgPaths.p3fd3a000}
              label="Twitter"
            />
            <SocialIcon
              path={svgPaths.pdb0b000}
              label="YouTube"
            />
            <SocialIcon path={svgPaths.p8693780} label="RSS" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function PostDetail({
  navigateToHome,
  navigateToAllPosts,
  navigateToDevTalks,
  navigateToAbout,
  navigateToPostDetail,
  selectedPost,
  isDarkMode,
  toggleDarkMode,
}) {
  return (
    <div className="bg-background min-h-screen">
      <Header
        navigateToHome={navigateToHome}
        navigateToAllPosts={navigateToAllPosts}
        navigateToDevTalks={navigateToDevTalks}
        navigateToAbout={navigateToAbout}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <NavigationBar navigateToAllPosts={navigateToAllPosts} />
      <ArticleTitle selectedPost={selectedPost} />
      <ArticleMeta selectedPost={selectedPost} />
      <HeroImage selectedPost={selectedPost} />
      <ArticleContent selectedPost={selectedPost} />
      <LatestPosts
        navigateToPostDetail={navigateToPostDetail}
      />
      <Footer navigateToHome={navigateToHome} />
    </div>
  );
}