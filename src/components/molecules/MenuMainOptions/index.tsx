import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from 'lucide-react';
import style from './style.module.css';
import ButtonOptions from '../../atoms/ButtonOptions';

const MenuMainOptions = () => {
  return (
    <nav className={style.optionsContainer}>
      <ButtonOptions>
        <HomeIcon />
      </ButtonOptions>
      <ButtonOptions>
        <HistoryIcon />
      </ButtonOptions>
      <ButtonOptions>
        <SettingsIcon />
      </ButtonOptions>
      <ButtonOptions>
        <SunIcon />
      </ButtonOptions>
    </nav>
  );
};

export default MenuMainOptions;
