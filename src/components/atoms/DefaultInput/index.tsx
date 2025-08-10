import style from './style.module.css';

interface PropInput {
  type: 'text' | 'number' | 'password' | 'email';
  title?: string;
  id: string;
}

const DefaultInput = ({ id, type, title }: PropInput) => {
  return (
    <div className={style.registerCountInput}>
      {title && <label htmlFor={id}>{title}</label>}
      <input type={type} id={id} autoComplete='off'></input>
    </div>
  );
};

export default DefaultInput;
