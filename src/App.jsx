import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Counter from './components/Counter'
function App() {


  return (
    <>
      {/* <div>
        <Hello abc="welcome" bc="hi"></Hello>
        <p>Welcome to react Vite</p>
      </div> */}
    <div>
      <Counter></Counter>
    </div>
    </>
  )
}

export default App
