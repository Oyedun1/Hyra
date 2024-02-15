import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Hyrahome from "./components/Hyrahome"
import OurTeachings from './components/OurTeachings'
import AboutUs from './components/AboutUs'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/hyrahome' element={<Hyrahome />} />
          <Route path='/ourteachings' element={<OurTeachings />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  )
}

export default App