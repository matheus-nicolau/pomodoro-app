import style from './style.module.css';

const RegisterCountInput = () => {
  return (
    <div className={style.registerCountInput}>
      <p>task: </p>
      <input type='text'></input>
    </div>
  );
};

export default RegisterCountInput;
