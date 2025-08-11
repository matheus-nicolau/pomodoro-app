import style from './style.module.css';
import { useEffect, useState, type ReactNode } from 'react';

interface iconOption {
  children: ReactNode;
  typeButton: 'error' | 'default';
}

type AvailableTheme = 'dark' | 'light';

const ButtonDefaultSmall = ({ typeButton, children }: iconOption) => {
  const [theme, setTheme] = useState<AvailableTheme>('dark');

  function handleTheme(event) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <section className={`${style.buttonDefault} ${style[typeButton]}`}>
      <a href='#' onClick={handleTheme}>
        {children}
      </a>
    </section>
  );
};

export default ButtonDefaultSmall;
