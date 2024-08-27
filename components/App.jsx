import { useState } from 'react'
import '../styling/App.css'
import Header from './Header.jsx'
import Meme from './Meme.jsx'


function App() {
  

  return (
    <>
    <Header
      image="troll-face.png"
      title="Meme Generator"
    />
    <Meme/>
     </>
  )
}

export default App
