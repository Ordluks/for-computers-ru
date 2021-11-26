import React from 'react'
import './App.scss'
import Header from './components/Header'
import Content from './components/Content'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { useAppDispatch } from './hooks/redux'
import { authThunk } from './store/reducers/userSlice'

function App() {
  const dispatch = useAppDispatch()
  dispatch(authThunk())

  return (
    <div className='app'>
      <Header />
      <div className='main'>
        <Content />
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default App
