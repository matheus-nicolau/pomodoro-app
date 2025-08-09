import { Trash2Icon } from 'lucide-react';
import ButtonTrash from '../../atoms/ButtonTrash';
import style from './style.module.css';
import HistoryTitle from '../../atoms/HistoryTitle';

const HistorySection = () => {
  return (
    <div className={style.historyContainer}>
      <HistoryTitle />
      <ButtonTrash>
        <Trash2Icon />
      </ButtonTrash>
    </div>
  );
};

export default HistorySection;
