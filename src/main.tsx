import './styles/global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Hello } from './components/hello/Hello';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hello />
  </StrictMode>,
);
