import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Landingpage from './screens/Landingpage';
import { Counterapp } from './components/Counterapp';
import { Calculatorapp } from './components/CalculatorApp';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
