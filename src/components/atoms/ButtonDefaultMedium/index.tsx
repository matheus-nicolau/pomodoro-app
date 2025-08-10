import style from './style.module.css';
import type { ReactNode } from 'react';

interface ButtonMediumType {
  children: ReactNode;
  type: 'start' | 'pause' | 'save';
}

const ButtonDefaultMedium = ({ type, children }: ButtonMediumType) => {
  return (
    <div className={style.containerbuttonDefaultMedium}>
      <button className={`${style.buttonDefaultMedium} ${style[type]}`}>
        {children}
      </button>
    </div>
  );
};

export default ButtonDefaultMedium;
