import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Game from './Game.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Game />
  </StrictMode>,
)
