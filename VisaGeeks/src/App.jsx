import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulaire from './formulaire'
import React from "react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Formulaire/>
    </div>
  )
}

export default App
