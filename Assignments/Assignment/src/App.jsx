import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import Footer from './Components/Footer'
import Todo from './Components/Todo'
import List from './Components/List'
import Moveon from './Components/Moveon'

function App() {


  return (
    <>
      {/* <h1> Ajugia Mayur Ashishbhai</h1> */}
      {/* <Moveon/> */}
      <Navbar/>
      <Herosection/>
      <Footer/>
      <Counter/>
       <Todo/>
      <List/>
    </>
  )
}

export default App
