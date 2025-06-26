import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { Counterapp } from './components/Counterapp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counterapp />
  </StrictMode>
)
