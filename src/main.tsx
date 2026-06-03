import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./assets/fonts/fonts.css"
import App from './App.tsx'
import { LanguageProvider } from './localization/useLanguage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
