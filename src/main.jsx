import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './Components/HomePage.jsx'
import ContactUs from './Components/ContactUs.jsx'
import ServicesPage from './Components/ServicesPage.jsx'
import Gallery from './Components/Gallery.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="services/:name" element={<ServicesPage />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="contact-us" element={<ContactUs />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
