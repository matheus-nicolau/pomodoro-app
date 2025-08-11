import style from './style.module.css';

const ConfigTitle = () => {
  return (
    <div className={style.containerConfigTitle}>
      <p className={style.configTitle}>Configurações</p>
      <p className={style.subTitle}>
        Configure o <b>Tic Tac</b> do relógio.
      </p>
    </div>
  );
};

export default ConfigTitle;
