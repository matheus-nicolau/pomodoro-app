import { Save } from 'lucide-react';
import ButtonDefaultMedium from '../../atoms/ButtonDefaultMedium';
import ConfigTitle from '../../atoms/ConfigTitle ';
import DefaultInput from '../../atoms/DefaultInput';
import style from './style.module.css';

const RegisterConfigForm = () => {
  return (
    <form action='submit' className={style.registerConfigForm}>
      <div className={style.configTitleContainer}>
        <ConfigTitle />
      </div>
      <DefaultInput id='focusInp' type='number' title='Foco(min):' />
      <DefaultInput
        id='shortPauseInp'
        type='number'
        title='Descanso curto(min):'
      />
      <DefaultInput
        id='largePauseInp'
        type='number'
        title='Descanso Longo(min):'
      />
      <ButtonDefaultMedium type='save'>
        <Save />
      </ButtonDefaultMedium>
    </form>
  );
};

export default RegisterConfigForm;
