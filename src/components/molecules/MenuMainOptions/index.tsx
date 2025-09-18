import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from 'lucide-react';
import style from './style.module.css';
import ButtonDefaultSmall from '../../atoms/ButtonDefaultSmall';

const MenuMainOptions = () => {
  return (
    <nav className={style.optionsContainer}>
      <ButtonDefaultSmall typeButton='default' typeFunctionButton='home'>
        <HomeIcon />
      </ButtonDefaultSmall>
      <ButtonDefaultSmall typeButton='default' typeFunctionButton='clock'>
        <HistoryIcon />
      </ButtonDefaultSmall>
      <ButtonDefaultSmall typeButton='default' typeFunctionButton='settings'>
        <SettingsIcon />
      </ButtonDefaultSmall>
      <ButtonDefaultSmall typeButton='default' typeFunctionButton='theme'>
        <SunIcon />
      </ButtonDefaultSmall>
    </nav>
  );
};

export default MenuMainOptions;
