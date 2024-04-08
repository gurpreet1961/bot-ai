import React from 'react'
import ChatComp from './Components/ChatComp'
import SideBar from './Components/SideBar'
import "./App.css"
const App = () => {
  return (
    <div className='container'>
      <SideBar />
      <ChatComp />
    </div>
  )
}

export default App