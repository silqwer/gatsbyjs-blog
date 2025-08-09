import { useState, useEffect } from 'react';
import DevBlog from "./components/DevBlog";
import AllPosts from "./components/AllPosts";
import PostDetail from "./components/PostDetail";
import DevTalks from "./components/DevTalks";
import About from "./components/About";

type PageType = 'home' | 'posts' | 'post-detail' | 'dev-talks' | 'about';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a saved preference, otherwise check system preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigateToHome = () => setCurrentPage('home');
  const navigateToAllPosts = () => setCurrentPage('posts');
  const navigateToDevTalks = () => setCurrentPage('dev-talks');
  const navigateToAbout = () => setCurrentPage('about');
  const navigateToPostDetail = (post = null) => {
    setSelectedPost(post);
    setCurrentPage('post-detail');
  };

  const navigationProps = {
    navigateToHome,
    navigateToAllPosts,
    navigateToDevTalks,
    navigateToAbout,
    navigateToPostDetail,
    currentPage,
    selectedPost,
    isDarkMode,
    toggleDarkMode
  };

  switch (currentPage) {
    case 'home':
      return <DevBlog {...navigationProps} />;
    case 'posts':
      return <AllPosts {...navigationProps} />;
    case 'post-detail':
      return <PostDetail {...navigationProps} />;
    case 'dev-talks':
      return <DevTalks {...navigationProps} />;
    case 'about':
      return <About {...navigationProps} />;
    default:
      return <DevBlog {...navigationProps} />;
  }
}