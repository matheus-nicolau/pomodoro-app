import style from './style.module.css';

type HeadingProps = {
  children: React.ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return (
    <>
      <h1 className={style.textHeader}>{children}</h1>
    </>
  );
};

export default Heading;
