import style from './style.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <a href='https://github.com/matheus-nicolau/pomodoro-app'>
          Tic Tac pomodoro &#169;2025 Matheus Nicolau
        </a>
      </div>
    </footer>
  );
};

export default Footer;
