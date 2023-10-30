import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './Routes/Routes.jsx'
import './Routes/route.css'

import { RouterProvider } from 'react-router-dom'
// import bg from '../src/assets/Photos/bg.jpg'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="background">
      <div className='content'>
        <RouterProvider router={Routes}>
        </RouterProvider>
      </div>
    </div>
  </React.StrictMode>,
)
