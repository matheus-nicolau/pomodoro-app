import style from './Hello.module.css';
import { Heading } from '../heading/Heading';
import { TimerIcon } from 'lucide-react';

export function Hello() {
  return (
    <div className={style.text}>
      <h1 className='hello'>Olá Mundo do App</h1>
      <Heading>Hello 1</Heading>
      <button>
        <TimerIcon />
      </button>
    </div>
  );
}
