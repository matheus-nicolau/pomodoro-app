import CyclesPointerCounter from '../CyclesPointerCounter';
import style from './style.module.css';

const CyclesCounter = () => {
  return (
    <div className={style.cyclesCounter}>
      <p className={style.titleCycle}>
        Nesse ciclo <b>foque</b> por <b>25 min.</b>
      </p>
      <div>
        <p>Ciclos:</p>
      </div>
      <div className={style.pointerContainer}>
        <CyclesPointerCounter typePointer='warning' />
        <CyclesPointerCounter typePointer='success' />
        <CyclesPointerCounter typePointer='warning' />
        <CyclesPointerCounter typePointer='success' />
        <CyclesPointerCounter typePointer='warning' />
        <CyclesPointerCounter typePointer='info' />
      </div>
    </div>
  );
};

export default CyclesCounter;
