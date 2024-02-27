import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Create a root element
const rootElement = document.getElementById('root');

// Render the app using createRoot
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
