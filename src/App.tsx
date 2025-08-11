import './global/global.css';
import { createRoot } from 'react-dom/client';
import MainSection from './components/organisms/MainSection';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainSection />
  </StrictMode>,
);
