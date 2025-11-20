import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'
import router from './router.tsx'
import emailjs from "@emailjs/browser";

emailjs.init({publicKey: "xxUV7_e-DLwMj2fr_"});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
