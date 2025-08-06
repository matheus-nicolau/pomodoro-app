import './styles/global.css';
import { createRoot } from 'react-dom/client';
import { Hello } from './components/hello/Hello';

createRoot(document.getElementById('root')!).render(
  <div className='container-fluid'>
    <div className='container'>
      <div className='content'>
        <Hello />
      </div>
    </div>
  </div>,
);
