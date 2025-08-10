import { PlayCircleIcon } from 'lucide-react';
import ButtonDefaultMedium from '../../atoms/ButtonDefaultMedium';
import CyclesCounter from '../../atoms/CyclesCounter';
import DefaultInput from '../../atoms/DefaultInput';
import style from './style.module.css';

const RegisterMainForm = () => {
  return (
    <form action='submit' className={style.registerMainForm}>
      <DefaultInput id='registerInput' type='text' title='task:' />
      <CyclesCounter />
      <ButtonDefaultMedium type='start'>
        {' '}
        <PlayCircleIcon />{' '}
      </ButtonDefaultMedium>
    </form>
  );
};

export default RegisterMainForm;
