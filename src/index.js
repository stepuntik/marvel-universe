import 'dotenv/config';

import { createRoot } from 'react-dom/client';

import App from './components/app/App';
import './style/style.scss';
import { StrictMode } from 'react';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
