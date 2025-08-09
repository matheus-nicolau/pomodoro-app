import RegisterCountInput from '../../atoms/RegisterCountInput';
import style from './style.module.css';

const RegisterMainForm = () => {
  return (
    <form action='submit' className={style.registerMainForm}>
      <label>
        <RegisterCountInput />
      </label>
    </form>
  );
};

export default RegisterMainForm;
