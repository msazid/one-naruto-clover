'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

/**
* ThemeToggle component
* 
* Allows user to toggle between light and dark theme.
* 
* Uses React hooks:
* - useState to manage mounted state
* - useTheme to get theme state and setters
* - useEffect to set mounted on initial render
* 
* Renders BsSunFill or BsMoonFill icon based on current theme.
* Allows clicking icon to toggle theme.
* 
* @returns JSX div with onClick handlers to toggle theme
*/

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='cursor-pointer'>
      {currentTheme === 'dark' ? (
        <BsSunFill onClick={() => setTheme('light')} />
      ) : (
        <BsMoonFill onClick={() => setTheme('dark')} />
      )}
    </div>
  );
}
