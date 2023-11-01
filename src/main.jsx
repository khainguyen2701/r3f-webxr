import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AnimationsProvider from './context/AnimationProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimationsProvider>
      <App />
    </AnimationsProvider>
  </React.StrictMode>,
);
