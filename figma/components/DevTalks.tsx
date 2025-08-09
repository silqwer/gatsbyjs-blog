import svgPaths from "../imports/svg-t3y1nz1m05";
import imgOliverJohnsonMxFm97QeS3IUnsplash1 from "figma:asset/f3fedc651c6d73c7cbfb05dc6888954341d15962.png";
import imgPexelsReneAsmussen257581 from "figma:asset/5ea43ab9f344fc20f5490a8cb172ab5771f300d8.png";
import imgDewangGuptaMHlTjKzcuysUnsplash1 from "figma:asset/638fb57bbd8d838783d192b0f107aeaa4c70137d.png";
import imgPavelPjatakovS0JxkTsSGyAUnsplash1 from "figma:asset/106b1c2baa1e72fc3e427b667bc64b4429471c15.png";
import imgPexelsCottonbro37785501 from "figma:asset/5b733b7c58445fb8b667151486f458e4471cee28.png";
import Header from "./Header";

// Social Icons
function SocialIcon({ path, label }) {
  return (
    <div className="relative shrink-0 w-5 h-5" aria-label={label}>
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
      <SocialIcon path={svgPaths.p8693780} label="RSS" />
    </div>
  );
}

// Page Title
function PageTitle() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 bg-background">
      <h1 className="text-6xl sm:text-8xl lg:text-9xl font-semibold uppercase text-foreground leading-tight">
        Dev Talks
      </h1>
    </div>
  );
}

// Podcast Cover Component
function TalkCover({ episode, title, image, category = "DEV TALK" }) {
  return (
    <div className="relative w-60 h-60 overflow-hidden flex-shrink-0 rounded-lg">
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Arrow Icon */}
      <div className="absolute top-8 right-8">
        <div className="flex items-center justify-center w-8 h-8">
          <div className="rotate-45">
            <div className="bg-white h-6 w-0.5"></div>
          </div>
        </div>
        <div className="absolute top-6 right-0 bg-white h-0.5 w-6"></div>
        <div className="absolute top-0 right-6 bg-white h-6 w-0.5"></div>
      </div>
      
      {/* Text Content */}
      <div className="absolute top-6 left-6 text-white">
        <p className="text-2xl font-semibold uppercase leading-none">{title}</p>
      </div>
      <div className="absolute top-14 left-6 text-white">
        <p className="text-sm font-semibold uppercase">{category}</p>
      </div>
      <div className="absolute bottom-6 left-6 text-white">
        <p className="text-sm font-semibold uppercase">Ep {episode.padStart(2, '0')}</p>
      </div>
    </div>
  );
}

// Talk Episode Component
function TalkEpisode({ episode, title, date, duration, category, image, onPlay }) {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12 py-6 bg-background">
      <div className="flex flex-col sm:flex-row items-start gap-6 lg:gap-16 flex-1">
        <div className="flex items-center gap-6 lg:gap-16">
          <span className="text-2xl font-semibold w-8 text-foreground flex-shrink-0">
            {episode.padStart(2, '0')}
          </span>
          <TalkCover 
            episode={episode} 
            title="DEV"
            image={image}
            category={category}
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl sm:text-3xl font-semibold leading-tight text-foreground mb-4">
            {title}
          </h3>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-16">
        <div className="flex gap-2 text-sm text-foreground">
          <span className="font-semibold">Date</span>
          <span>{date}</span>
        </div>
        <div className="flex gap-2 text-sm text-foreground">
          <span className="font-semibold">Duration</span>
          <span>{duration}</span>
        </div>
        <button 
          onClick={onPlay}
          className="flex items-center gap-2 text-base font-semibold uppercase hover:opacity-70 transition-opacity text-foreground"
        >
          <span>Listen</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// Main Talks Section
function TalksSection() {
  const talks = [
    {
      episode: "5",
      title: "The Future of React: Server Components Deep Dive",
      date: "Dec 15, 2024",
      duration: "1hr 25min",
      category: "React",
      image: imgOliverJohnsonMxFm97QeS3IUnsplash1
    },
    {
      episode: "4", 
      title: "Building Scalable TypeScript Applications",
      date: "Dec 8, 2024",
      duration: "58min",
      category: "TypeScript",
      image: imgPexelsReneAsmussen257581
    },
    {
      episode: "3",
      title: "DevOps Best Practices for Modern Development",
      date: "Dec 1, 2024", 
      duration: "1hr 15min",
      category: "DevOps",
      image: imgDewangGuptaMHlTjKzcuysUnsplash1
    },
    {
      episode: "2",
      title: "Microservices Architecture: Lessons Learned",
      date: "Nov 24, 2024",
      duration: "1hr 8min", 
      category: "Architecture",
      image: imgPavelPjatakovS0JxkTsSGyAUnsplash1
    },
    {
      episode: "1",
      title: "Career Growth for Software Engineers",
      date: "Nov 17, 2024",
      duration: "52min",
      category: "Career",
      image: imgPexelsCottonbro37785501
    }
  ];

  const handlePlay = (talk) => {
    console.log(`Playing: ${talk.title}`);
    // Here you would implement actual play functionality
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 bg-background">
      <div className="space-y-12">
        {talks.map((talk, index) => (
          <div key={talk.episode}>
            <TalkEpisode 
              {...talk}
              onPlay={() => handlePlay(talk)}
            />
            {index < talks.length - 1 && (
              <div className="h-px bg-border mt-12"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Footer Newsletter
function FooterNewsletter() {
  return (
    <div className="text-center py-16 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold uppercase text-muted leading-tight mb-8">
          Dev insights to your inbox
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Email"
            className="flex-1 px-4 py-3 text-base bg-background text-foreground border border-border rounded-md"
          />
          <button className="bg-background text-foreground px-6 py-3 uppercase text-sm font-medium hover:opacity-70 transition-colors border border-border rounded-md">
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
    <footer className="bg-foreground text-background">
      {/* Newsletter Ticker */}
      <div className="border-b border-background/20">
        <div className="py-5 overflow-hidden">
          <div className="flex gap-6 items-center whitespace-nowrap animate-pulse">
            {["Dev Talks+++", "New Episodes+++", "Tech Insights+++", "Code Tips+++"].map((item, index) => (
              <span key={index} className="text-xl sm:text-2xl font-semibold uppercase">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <FooterNewsletter />
      
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
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">Frontend</button>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">Backend</button>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">DevOps</button>
          </div>
          
          <div className="space-y-3">
            <div className="h-px bg-background/20 mb-6"></div>
            <button 
              onClick={navigateToAllPosts}
              className="block text-base hover:opacity-70 transition-opacity text-left text-background"
            >
              Posts
            </button>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">Projects</button>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">About</button>
          </div>
          
          <div className="space-y-3">
            <div className="h-px bg-background/20 mb-6"></div>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">Resources</button>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">Contact</button>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">Resume</button>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-sm text-background/70">
            © 2025 Dev Blog - Built with React & TypeScript
          </p>
          <Social color="text-background" />
        </div>
      </div>
    </footer>
  );
}

export default function DevTalks({ navigateToHome, navigateToAllPosts, navigateToDevTalks, navigateToAbout, isDarkMode, toggleDarkMode }) {
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
      <PageTitle />
      <TalksSection />
      <Footer 
        navigateToHome={navigateToHome} 
        navigateToAllPosts={navigateToAllPosts}
      />
    </div>
  );
}