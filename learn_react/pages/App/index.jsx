import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from '../../App.Global'
import Header from '../../components/Header/index'
import Content from '../../layouts/Content/index'
import Page1 from '../../layouts/Page1/index'

const App = () => {
  return (
  <BrowserRouter>
    <GlobalStyles />
    <Header />
    <Routes>
      <Route path='/' element={<Content />} />
      <Route path='/layouts/Page1' element={<Page1 />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
