import style from './style.module.css';
import type { ReactNode } from 'react';

interface iconOption {
  children: ReactNode;
}

const ButtonTrash = ({ children }: iconOption) => {
  return (
    <section className={style.buttonOptions}>
      <a href='#'>{children}</a>
    </section>
  );
};

export default ButtonTrash;
