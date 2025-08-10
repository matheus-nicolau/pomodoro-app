import Counter from '../../atoms/Counter';
import RegisterMainForm from '../../molecules/RegisterMainForm';
import style from './style.module.css';

const FormCount = () => {
  return (
    <div className={style.formCount}>
      <Counter />
      <RegisterMainForm />
    </div>
  );
};

export default FormCount;
