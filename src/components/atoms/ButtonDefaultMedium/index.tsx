import style from './style.module.css';
import type { ReactNode } from 'react';

interface ButtonMediumType {
  children: ReactNode;
  type: 'start' | 'pause' | 'save';
}

const ButtonDefaultMedium = ({ type, children }: ButtonMediumType) => {
  function handleClick(event) {
    console.log('cliquei');
    console.log('Teste Gather');
    console.log('Teste Gather');

    event.preventDefault();
  }

  return (
    <div className={style.containerbuttonDefaultMedium}>
      <button
        onClick={handleClick}
        className={`${style.buttonDefaultMedium} ${style[type]}`}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonDefaultMedium;
