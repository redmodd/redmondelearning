import { StrictMode } from 'react'; // Add this line
import { createRoot } from 'react-dom/client';
import App from './Components/App/App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);