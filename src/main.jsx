import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Login, SchemePage, Schemes, ScholarshipDetails } from './Components/index.js'
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import AboutUsPage from './Components/AboutUs/AboutUs.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<LandingPage />} />
      <Route path="about-us/" element={<AboutUsPage />} />
      <Route path='login/' element={<Login />} />
      <Route path="schemes/" element={<Schemes />} />
      <Route path="schemes/:id" element={<ScholarshipDetails />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
