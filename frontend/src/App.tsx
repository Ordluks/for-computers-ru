import React from 'react'
import './App.scss'
import Header from './components/Header'
import Content from './components/Content'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='main'>
        <Content />
        <Sidebar />
      </div>
      <div className='footer'></div>
    </div>
  )
}

export default App
