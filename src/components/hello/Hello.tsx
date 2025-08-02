import './Hello.css';
import { Heading } from '../heading/Heading';
import { TimerIcon } from 'lucide-react';

export function Hello() {
  return (
    <>
      <h1 className='hello'>Olá Mundo do App</h1>
      <Heading attr={123}>Hello 1</Heading>
      <button>
        <TimerIcon />
      </button>
    </>
  );
}
