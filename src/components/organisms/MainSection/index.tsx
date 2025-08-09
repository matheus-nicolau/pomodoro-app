import Counter from '../../atoms/Counter';
import MenuMainButton from '../../molecules/MenuMainButton';
import MenuMainOptions from '../../molecules/MenuMainOptions';
import RegisterMainForm from '../../molecules/RegisterMainForm';
import style from './style.module.css';

const MainSection = () => {
  return (
    <div className={style.text}>
      <MenuMainButton />
      <MenuMainOptions />
      <Counter />
      <RegisterMainForm />
    </div>
  );
};

export default MainSection;
