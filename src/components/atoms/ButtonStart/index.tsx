import { PlayCircleIcon } from 'lucide-react';
import style from './style.module.css';

const ButtonStart = () => {
  return (
    <div className={style.containerbuttonStart}>
      <button className={style.buttonStart}>
        <PlayCircleIcon />
      </button>
    </div>
  );
};

export default ButtonStart;
