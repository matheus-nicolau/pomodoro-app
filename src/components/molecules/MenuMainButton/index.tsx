import { TimerIcon } from 'lucide-react';
import style from './style.module.css';

const MenuMainButton = () => {
  return (
    <div className={style.chronosContainer}>
      <a href='#'>
        <TimerIcon />
      </a>
      <div>Tic Tac</div>
    </div>
  );
};

export default MenuMainButton;
