import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from 'lucide-react';
import style from './style.module.css';
import ButtonDefaultSmall from '../../atoms/ButtonDefaultSmall';

const MenuMainOptions = () => {
  return (
    <nav className={style.optionsContainer}>
      <ButtonDefaultSmall typeButton='default'>
        <HomeIcon />
      </ButtonDefaultSmall>
      <ButtonDefaultSmall typeButton='default'>
        <HistoryIcon />
      </ButtonDefaultSmall>
      <ButtonDefaultSmall typeButton='default'>
        <SettingsIcon />
      </ButtonDefaultSmall>
      <ButtonDefaultSmall typeButton='default'>
        <SunIcon />
      </ButtonDefaultSmall>
    </nav>
  );
};

export default MenuMainOptions;
