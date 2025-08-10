import Footer from '../../molecules/Footer';
import MenuMainButton from '../../molecules/MenuMainButton';
import MenuMainOptions from '../../molecules/MenuMainOptions';
import FormConfig from '../FormConfig';
import style from './style.module.css';

const MainSection = () => {
  return (
    <div className={style.text}>
      <MenuMainButton />
      <MenuMainOptions />
      <FormConfig />
      <Footer />
    </div>
  );
};

export default MainSection;
