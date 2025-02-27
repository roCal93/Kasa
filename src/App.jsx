import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
