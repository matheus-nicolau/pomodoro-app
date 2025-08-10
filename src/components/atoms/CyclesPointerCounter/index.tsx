import style from './style.module.css';

interface TypePointer {
  typePointer: 'success' | 'warning' | 'info';
}

const CyclesPointerCounter = ({ typePointer }: TypePointer) => {
  return (
    <div className={`${style.pointerContainer} ${style[typePointer]}`}> </div>
  );
};

export default CyclesPointerCounter;
