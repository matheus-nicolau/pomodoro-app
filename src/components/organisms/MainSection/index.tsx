import MenuMainButton from '../../molecules/MenuMainButton';
import MenuMainOptions from '../../molecules/MenuMainOptions';
import style from './style.module.css';

const MainSection = () => {
  return (
    <div className={style.text}>
      <MenuMainButton />
      <MenuMainOptions />
    </div>
  );
};

export default MainSection;
