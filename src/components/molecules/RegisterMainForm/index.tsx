import ButtonStart from '../../atoms/ButtonStart';
import CyclesCounter from '../../atoms/CyclesCounter';
import DefaultInput from '../../atoms/DefaultInput';
import style from './style.module.css';

const RegisterMainForm = () => {
  return (
    <form action='submit' className={style.registerMainForm}>
      <DefaultInput id='registerInput' type='text' title='task:' />
      <CyclesCounter />
      <ButtonStart />
    </form>
  );
};

export default RegisterMainForm;
