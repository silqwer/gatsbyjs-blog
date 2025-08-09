import svgPaths from "../imports/svg-w0rjwbxdhv";
import imgJackFinniganRriAi0NhcbcUnsplash1 from "figma:asset/199d613cfb356aaaf0d48610af6e57b9557d1e32.png";
import imgPexelsReneAsmussen257581 from "figma:asset/5ea43ab9f344fc20f5490a8cb172ab5771f300d8.png";
import imgDewangGuptaMHlTjKzcuysUnsplash1 from "figma:asset/638fb57bbd8d838783d192b0f107aeaa4c70137d.png";
import imgPavelPjatakovS0JxkTsSGyAUnsplash1 from "figma:asset/106b1c2baa1e72fc3e427b667bc64b4429471c15.png";
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
        About Me
      </h1>
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 bg-background">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Profile Image */}
        <div className="order-2 lg:order-1">
          <div className="aspect-[4/5] w-full max-w-lg overflow-hidden rounded-lg">
            <img 
              src={imgJackFinniganRriAi0NhcbcUnsplash1}
              alt="Alex Kim - Full Stack Developer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Profile Content */}
        <div className="order-1 lg:order-2 flex flex-col justify-center space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-base font-semibold uppercase text-muted-foreground tracking-wide">Full Stack Developer</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                Alex Kim
              </h2>
            </div>
            
            <p className="text-lg text-foreground leading-relaxed">
              I'm a passionate full-stack developer with over 8 years of experience building 
              modern web applications. I specialize in React, TypeScript, Node.js, and cloud 
              architecture, helping startups and enterprises scale their digital products.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me writing about the latest tech trends, 
              mentoring junior developers, or exploring new technologies that push the 
              boundaries of what's possible on the web.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-foreground">
              <div className="flex gap-2">
                <span className="font-semibold">Email</span>
                <span>alex@devblog.com</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Location</span>
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-foreground">Follow me:</span>
              <Social />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Skills Section
function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "GraphQL"]
    },
    {
      category: "Backend", 
      technologies: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      category: "DevOps",
      technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Monitoring"]
    },
    {
      category: "Tools",
      technologies: ["Git", "VSCode", "Figma", "Postman", "Jest", "Cypress"]
    }
  ];

  return (
    <div className="bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase text-foreground leading-tight mb-6">
            Skills & Technologies
          </h2>
          <div className="h-px bg-border"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-semibold uppercase text-foreground">
                {skill.category}
              </h3>
              <div className="space-y-3">
                {skill.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <span className="text-base text-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Experience Section
function ExperienceSection() {
  const experiences = [
    {
      company: "TechFlow Inc.",
      position: "Senior Full Stack Developer",
      period: "2021 - Present",
      description: "Lead development of scalable web applications serving 100k+ users. Built microservices architecture using Node.js and React.",
      image: imgPexelsReneAsmussen257581
    },
    {
      company: "StartupLab",
      position: "Full Stack Developer",
      period: "2019 - 2021", 
      description: "Developed MVP products for early-stage startups. Worked with React, Python, and AWS to deliver products from concept to production.",
      image: imgDewangGuptaMHlTjKzcuysUnsplash1
    },
    {
      company: "Digital Agency Co.",
      position: "Frontend Developer",
      period: "2017 - 2019",
      description: "Created responsive web applications for enterprise clients. Specialized in React, TypeScript, and modern CSS frameworks.",
      image: imgPavelPjatakovS0JxkTsSGyAUnsplash1
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-background">
      <div className="mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase text-foreground leading-tight mb-6">
          Work Experience
        </h2>
        <div className="h-px bg-border"></div>
      </div>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="lg:w-48 lg:h-48 w-full aspect-square overflow-hidden rounded-lg flex-shrink-0">
              <img 
                src={exp.image} 
                alt={exp.company}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">
                  {exp.position}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <p className="text-lg font-semibold text-muted-foreground">{exp.company}</p>
                  <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <p className="text-base text-muted-foreground">{exp.period}</p>
                </div>
              </div>
              
              <p className="text-base text-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Built a modern e-commerce platform with React, Node.js, and PostgreSQL. Features include real-time inventory management and payment processing.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      status: "Production"
    },
    {
      title: "Developer Tools Dashboard",
      description: "Created an analytics dashboard for development teams to track code quality, performance metrics, and deployment statistics.",
      tech: ["Next.js", "TypeScript", "GraphQL", "MongoDB"],
      status: "Production"
    },
    {
      title: "Open Source UI Library",
      description: "Developed and maintain a popular React component library with 5k+ GitHub stars. Used by companies like Spotify and Airbnb.",
      tech: ["React", "TypeScript", "Storybook", "Jest"],
      status: "Active"
    }
  ];

  return (
    <div className="bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase text-foreground leading-tight mb-6">
            Featured Projects
          </h2>
          <div className="h-px bg-border"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background border border-border rounded-lg p-8 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 bg-muted border border-border rounded-full text-xs font-semibold uppercase text-foreground">
                    {project.status}
                  </span>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase text-foreground">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="inline-flex items-center px-3 py-1 bg-muted border border-border rounded-full text-xs text-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Contact Section
function ContactSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-background">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase text-foreground leading-tight">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to chat about tech, feel free to reach out.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-foreground text-background px-8 py-4 uppercase text-sm font-medium hover:opacity-90 transition-colors rounded-md">
            Get In Touch
          </button>
          <button className="border border-border text-foreground px-8 py-4 uppercase text-sm font-medium hover:bg-muted transition-colors rounded-md">
            Download Resume
          </button>
        </div>
        
        <div className="flex items-center justify-center gap-6 pt-8">
          <Social />
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
            {["Connect+++", "Collaborate+++", "Create+++", "Code+++"].map((item, index) => (
              <span key={index} className="text-xl sm:text-2xl font-semibold uppercase">
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
            Stay in touch
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
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">Contact</button>
          </div>
          
          <div className="space-y-3">
            <div className="h-px bg-background/20 mb-6"></div>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">Resources</button>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">Resume</button>
            <button className="block text-base hover:opacity-70 transition-opacity text-left text-background">LinkedIn</button>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-sm text-background/70">
            © 2025 Alex Kim - Full Stack Developer
          </p>
          <Social color="text-background" />
        </div>
      </div>
    </footer>
  );
}

export default function About({ navigateToHome, navigateToAllPosts, navigateToDevTalks, navigateToAbout, isDarkMode, toggleDarkMode }) {
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
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer 
        navigateToHome={navigateToHome} 
        navigateToAllPosts={navigateToAllPosts}
      />
    </div>
  );
}