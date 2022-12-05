import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card, { CardBlue } from './assets/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>


      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Card props="UWU" />
      <CardBlue props2="WUW"/>
    </div>
  )
}

export default App
