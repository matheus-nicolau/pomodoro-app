import './global/global.css';
import { createRoot } from 'react-dom/client';
import { Hello } from './components/organisms/hello/Hello';

createRoot(document.getElementById('root')!).render(<Hello />);
