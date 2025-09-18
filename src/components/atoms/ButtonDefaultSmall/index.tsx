import style from './style.module.css';
import { useEffect, useState, type ReactNode } from 'react';

interface iconOption {
  children: ReactNode;
  typeButton: 'error' | 'default';
  typeFunctionButton: 'home' | 'clock' | 'settings' | 'theme';
}

type AvailableTheme = 'dark' | 'light';

const ButtonDefaultSmall = ({
  typeButton,
  children,
  typeFunctionButton,
}: iconOption) => {
  const [theme, setTheme] = useState<AvailableTheme>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableTheme) || 'dark';
    return storageTheme;
  });

  function handleTheme(event) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      const storyTheme = theme === 'dark' ? 'light' : 'dark';

      localStorage.setItem('theme', storyTheme);
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  let functionality = undefined;
  if (typeFunctionButton === 'home') functionality = undefined;
  if (typeFunctionButton === 'clock') functionality = undefined;
  if (typeFunctionButton === 'settings') functionality = undefined;
  if (typeFunctionButton === 'theme') functionality = handleTheme;

  return (
    <section className={`${style.buttonDefault} ${style[typeButton]}`}>
      <a href='#' onClick={functionality}>
        {children}
      </a>
    </section>
  );
};

export default ButtonDefaultSmall;
