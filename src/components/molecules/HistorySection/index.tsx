import { Trash2Icon } from 'lucide-react';
import style from './style.module.css';
import HistoryTitle from '../../atoms/HistoryTitle';
import ButtonDefaultSmall from '../../atoms/ButtonDefaultSmall';

const HistorySection = () => {
  return (
    <div className={style.historyContainer}>
      <HistoryTitle />
      <ButtonDefaultSmall typeButton='default'>
        <Trash2Icon />
      </ButtonDefaultSmall>
    </div>
  );
};

export default HistorySection;
