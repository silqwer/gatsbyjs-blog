import { useState, useEffect } from 'react';
import DarkModeToggle from "./DarkModeToggle";

// Social Icons Component
function SocialIcon({ path, label }) {
  const svgPaths = {
    p1305e900: "M10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5ZM10 5.83333C11.1051 5.83333 12.1649 6.27232 12.9463 7.05372C13.7277 7.83512 14.1667 8.89493 14.1667 10C14.1667 11.1051 13.7277 12.1649 12.9463 12.9463C12.1649 13.7277 11.1051 14.1667 10 14.1667C8.89493 14.1667 7.83512 13.7277 7.05372 12.9463C6.27232 12.1649 5.83333 11.1051 5.83333 10C5.83333 8.89493 6.27232 7.83512 7.05372 7.05372C7.83512 6.27232 8.89493 5.83333 10 5.83333V5.83333ZM15.4167 5.625C15.4167 5.90127 15.3069 6.16622 15.1116 6.36157C14.9162 6.55692 14.6513 6.66667 14.375 6.66667C14.0987 6.66667 13.8338 6.55692 13.6384 6.36157C13.4431 6.16622 13.3333 5.90127 13.3333 5.625C13.3333 5.34873 13.4431 5.08378 13.6384 4.88843C13.8338 4.69308 14.0987 4.58333 14.375 4.58333C14.6513 4.58333 14.9162 4.69308 15.1116 4.88843C15.3069 5.08378 15.4167 5.34873 15.4167 5.625V5.625ZM10 3.33333C7.93833 3.33333 7.60167 3.33917 6.6425 3.38167C5.98917 3.4125 5.55083 3.5 5.14417 3.65833C4.80385 3.78328 4.49618 3.98355 4.24417 4.24417C3.98334 4.49617 3.78279 4.80382 3.6575 5.14417C3.49917 5.5525 3.41167 5.99 3.38167 6.6425C3.33833 7.5625 3.33333 7.88417 3.33333 10C3.33333 12.0617 3.33917 12.3983 3.38167 13.3575C3.4125 14.01 3.5 14.4492 3.6575 14.855C3.79917 15.2175 3.96583 15.4783 4.2425 15.755C4.52333 16.035 4.78417 16.2025 5.1425 16.3408C5.55417 16.5 5.9925 16.5883 6.6425 16.6183C7.5625 16.6617 7.88417 16.6667 10 16.6667C12.0617 16.6667 12.3983 16.6608 13.3575 16.6183C14.0092 16.5875 14.4483 16.5 14.855 16.3425C15.1948 16.2169 15.5023 16.0171 15.755 15.7575C16.0358 15.4767 16.2033 15.2158 16.3417 14.8575C16.5 14.4467 16.5883 14.0075 16.6183 13.3575C16.6617 12.4375 16.6667 12.1158 16.6667 10C16.6667 7.93833 16.6608 7.60167 16.6183 6.6425C16.5875 5.99083 16.5 5.55083 16.3417 5.14417C16.2161 4.80417 16.0159 4.49663 15.7558 4.24417C15.5039 3.98321 15.1963 3.78264 14.8558 3.6575C14.4475 3.49917 14.0092 3.41167 13.3575 3.38167C12.4375 3.33833 12.1158 3.33333 10 3.33333ZM10 1.66667C12.2642 1.66667 12.5467 1.675 13.435 1.71667C14.3225 1.75833 14.9267 1.8975 15.4583 2.10417C16.0083 2.31583 16.4717 2.6025 16.935 3.065C17.3587 3.48158 17.6866 3.98549 17.8958 4.54167C18.1017 5.0725 18.2417 5.6775 18.2833 6.565C18.3225 7.45333 18.3333 7.73583 18.3333 10C18.3333 12.2642 18.325 12.5467 18.2833 13.435C18.2417 14.3225 18.1017 14.9267 17.8958 15.4583C17.6872 16.0148 17.3593 16.5189 16.935 16.935C16.5183 17.3586 16.0144 17.6865 15.4583 17.8958C14.9275 18.1017 14.3225 18.2417 13.435 18.2833C12.5467 18.3225 12.2642 18.3333 10 18.3333C7.73583 18.3333 7.45333 18.325 6.565 18.2833C5.6775 18.2417 5.07333 18.1017 4.54167 17.8958C3.98527 17.6871 3.48127 17.3591 3.065 16.935C2.64117 16.5185 2.31328 16.0146 2.10417 15.4583C1.8975 14.9275 1.75833 14.3225 1.71667 13.435C1.6775 12.5467 1.66667 12.2642 1.66667 10C1.66667 7.73583 1.675 7.45333 1.71667 6.565C1.75833 5.67667 1.8975 5.07333 2.10417 4.54167C2.3127 3.98515 2.64067 3.4811 3.065 3.065C3.48139 2.64103 3.98536 2.31311 4.54167 2.10417C5.07333 1.8975 5.67667 1.75833 6.565 1.71667C7.45333 1.6775 7.73583 1.66667 10 1.66667Z",
    p3fd3a000: "M18.4683 4.71333C17.8321 4.99474 17.1575 5.17956 16.4667 5.26167C17.1948 4.82619 17.7398 4.14084 18 3.33333C17.3167 3.74 16.5675 4.025 15.7867 4.17917C15.2622 3.61798 14.567 3.2458 13.8091 3.12049C13.0513 2.99517 12.2733 3.12374 11.5961 3.48621C10.9188 3.84868 10.3803 4.42474 10.0643 5.12483C9.7482 5.82492 9.67229 6.60982 9.84833 7.3575C8.46259 7.28804 7.10694 6.92794 5.86941 6.30055C4.63187 5.67317 3.54011 4.79254 2.665 3.71583C2.35524 4.24788 2.19246 4.85269 2.19333 5.46833C2.19333 6.67667 2.80833 7.74417 3.74333 8.36917C3.19001 8.35175 2.64886 8.20232 2.165 7.93333V7.97667C2.16517 8.78142 2.44364 9.56135 2.95321 10.1842C3.46277 10.8071 4.17207 11.2346 4.96083 11.3942C4.44718 11.5334 3.90859 11.5539 3.38583 11.4542C3.60822 12.1469 4.04167 12.7527 4.62549 13.1868C5.20931 13.6208 5.91427 13.8615 6.64167 13.875C5.91873 14.4428 5.09098 14.8625 4.20573 15.1101C3.32049 15.3578 2.39511 15.4285 1.4825 15.3183C3.07558 16.3429 4.93008 16.8868 6.82417 16.885C13.235 16.885 16.7408 11.5742 16.7408 6.96833C16.7408 6.81833 16.7367 6.66667 16.73 6.51833C17.4124 6.02514 18.0013 5.41418 18.4692 4.71417L18.4683 4.71333Z",
    pdb0b000: "M17.9525 5.415C18.3333 6.9 18.3333 10 18.3333 10C18.3333 10 18.3333 13.1 17.9525 14.585C17.7408 15.4058 17.1217 16.0517 16.3375 16.27C14.9133 16.6667 10 16.6667 10 16.6667C10 16.6667 5.08917 16.6667 3.6625 16.27C2.875 16.0483 2.25667 15.4033 2.0475 14.585C1.66667 13.1 1.66667 10 1.66667 10C1.66667 10 1.66667 6.9 2.0475 5.415C2.25917 4.59417 2.87833 3.94833 3.6625 3.73C5.08917 3.33333 10 3.33333 10 3.33333C10 3.33333 14.9133 3.33333 16.3375 3.73C17.125 3.95167 17.7433 4.59667 17.9525 5.415V5.415ZM8.33333 12.9167L13.3333 10L8.33333 7.08333V12.9167Z",
    p8693780: "M2.5 2.5C10.7842 2.5 17.5 9.21583 17.5 17.5H15C15 10.5967 9.40333 5 2.5 5V2.5ZM2.5 8.33333C7.5625 8.33333 11.6667 12.4375 11.6667 17.5H9.16667C9.16667 15.7319 8.46429 14.0362 7.21405 12.786C5.9638 11.5357 4.26811 10.8333 2.5 10.8333V8.33333ZM2.5 14.1667C3.38405 14.1667 4.2319 14.5179 4.85702 15.143C5.48214 15.7681 5.83333 16.6159 5.83333 17.5H2.5V14.1667Z"
  };

  return (
    <div className="relative shrink-0 w-5 h-5" aria-label={label}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths[path]} fill="currentColor" />
      </svg>
    </div>
  );
}

function Social({ color = "text-foreground" }) {
  return (
    <div className={`flex gap-3 ${color}`}>
      <SocialIcon path="p1305e900" label="Instagram" />
      <SocialIcon path="p3fd3a000" label="Twitter" />
      <SocialIcon path="pdb0b000" label="YouTube" />
      <SocialIcon path="p8693780" label="RSS" />
    </div>
  );
}

// Mobile Menu Component
function MobileMenu({ 
  isOpen, 
  onClose, 
  navigateToHome, 
  navigateToAllPosts, 
  navigateToDevTalks, 
  navigateToAbout, 
  isDarkMode, 
  toggleDarkMode 
}) {
  const menuItems = [
    { label: 'Home', action: navigateToHome },
    { label: 'Posts', action: navigateToAllPosts },
    { label: 'Dev Talks', action: navigateToDevTalks },
    { label: 'About', action: navigateToAbout }
  ];

  const handleMenuItemClick = (action) => {
    action();
    onClose();
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Slide Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background border-l border-border shadow-xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <button 
            onClick={() => handleMenuItemClick(navigateToHome)}
            className="text-foreground text-xl font-semibold uppercase tracking-tight"
          >
            Dev Blog
          </button>
          <button 
            onClick={onClose}
            className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col h-full">
          {/* Navigation Items */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-6">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleMenuItemClick(item.action)}
                  className="block w-full text-left text-2xl font-semibold text-foreground hover:text-muted-foreground transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Bottom Section */}
          <div className="px-6 py-6 border-t border-border space-y-6">
            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-foreground font-medium">Dark Mode</span>
              <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground uppercase tracking-wide">Follow Us</p>
              <Social />
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground uppercase tracking-wide">Newsletter</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email"
                  className="flex-1 px-3 py-2 text-sm bg-muted border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <button className="px-4 py-2 bg-foreground text-background text-sm font-medium rounded-md hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Header Component
export default function Header({ 
  navigateToHome, 
  navigateToAllPosts, 
  navigateToDevTalks, 
  navigateToAbout, 
  isDarkMode, 
  toggleDarkMode 
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="border-b border-border bg-background sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <button 
              onClick={navigateToHome}
              className="text-foreground text-2xl font-semibold uppercase tracking-tight hover:opacity-70 transition-opacity"
            >
              Dev Blog
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex gap-6">
                <button 
                  onClick={navigateToAllPosts}
                  className="text-foreground text-xl hover:opacity-70 transition-opacity"
                >
                  Posts
                </button>
                <button 
                  onClick={navigateToDevTalks}
                  className="text-foreground text-xl hover:opacity-70 transition-opacity"
                >
                  Dev Talks
                </button>
                <button 
                  onClick={navigateToAbout}
                  className="text-foreground text-xl hover:opacity-70 transition-opacity"
                >
                  About
                </button>
              </nav>
              <div className="w-4 h-px bg-border"></div>
              <Social />
              <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
              <button 
                onClick={toggleMobileMenu}
                className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        navigateToHome={navigateToHome}
        navigateToAllPosts={navigateToAllPosts}
        navigateToDevTalks={navigateToDevTalks}
        navigateToAbout={navigateToAbout}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </>
  );
}