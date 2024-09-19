import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "mobx-react";
import { oddsStore } from "./stores/OddsStore";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider oddsStore={oddsStore}>
      <App />
    </Provider>
  </StrictMode>,
)
