import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from 'lucide-react';
import style from './style.module.css';

const MenuMainOptions = () => {
  return (
    <div className={style.optionsContainer}>
      <section>
        <a href='#'>
          <HomeIcon />
        </a>
      </section>
      <section>
        <a href='#'>
          <HistoryIcon />
        </a>
      </section>
      <section>
        <a href='#'>
          <SettingsIcon />
        </a>
      </section>
      <section>
        <a href='#'>
          <SunIcon />
        </a>
      </section>
    </div>
  );
};

export default MenuMainOptions;
