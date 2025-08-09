// Dark Mode Toggle Component
export default function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      className='flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border hover:bg-accent transition-colors duration-200'
      aria-label='Toggle dark mode'
    >
      {isDarkMode ? (
        // Sun icon for light mode
        <svg
          className='w-5 h-5 text-foreground'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <circle cx='12' cy='12' r='5' />
          <path d='M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42' />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg
          className='w-5 h-5 text-foreground'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
        </svg>
      )}
    </button>
  );
}
