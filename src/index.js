import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom

import App from './components/app/App';
import './style/style.scss';

// Use createRoot to render your application
const root = createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
