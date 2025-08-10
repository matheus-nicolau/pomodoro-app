import style from './style.module.css';
import type { ReactNode } from 'react';

interface iconOption {
  children: ReactNode;
  typeButton: 'error' | 'default';
}

const ButtonDefaultSmall = ({ typeButton, children }: iconOption) => {
  return (
    <section className={`${style.buttonDefault} ${style[typeButton]}`}>
      <a href='#'>{children}</a>
    </section>
  );
};

export default ButtonDefaultSmall;
