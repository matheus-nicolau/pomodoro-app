import style from './MainList.module.css';

type MainListProps = {
  children: React.ReactNode;
};

function MainList({ children }: MainListProps) {
  return (
    <div className={style.containerFluid}>
      <div className={style.container}>
        <div className={style.content}></div>
        {children}
      </div>
    </div>
  );
}

export default MainList;
