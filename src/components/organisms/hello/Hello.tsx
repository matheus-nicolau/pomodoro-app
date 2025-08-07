import style from './Hello.module.css';
import { Heading } from '../../molecules/heading/Heading';
import MainList from '../../molecules/mainList/MainList';
import { TimerIcon } from 'lucide-react';
import MenuMainButton from '../../atoms/menuMainButton/MenuMainButton';

export function Hello() {
  return (
    <div className={style.text}>
      <h1 className='hello'>Olá Mundo do App</h1>
      <Heading>Hello 1</Heading>
      <MenuMainButton />
      <MainList>
        <Heading>Logo</Heading>
      </MainList>
      <MainList>
        <Heading>Menu</Heading>
      </MainList>
    </div>
  );
}
