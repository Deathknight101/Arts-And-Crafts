import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './components/Routes/Routes.jsx'
import AuthProviders from './components/Providers/AuthProviders.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>

        <RouterProvider router={routes}></RouterProvider>
        <Toaster className="bottom-right" richColors />

      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>,
)
