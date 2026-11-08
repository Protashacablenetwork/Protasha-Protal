import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Global Error Catching for Debugging 'App not starting' issues
window.onerror = function(msg, url, line, col, error) {
  console.error('[Fatal Error]:', msg, 'at', url, line, ':', col, error);
  return false;
};

window.onunhandledrejection = function(event) {
  console.error('[Unhandled Promise Rejection]:', event.reason);
};

console.log('[App] Starting initialization...');
createRoot(document.getElementById('root')!).render(<App />);
