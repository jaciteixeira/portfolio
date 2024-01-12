import { useState } from 'react'
import Cabecalho from './components/Cabecalho/Cabecalho'
import Rodape from './components/Rodape/Rodape'
import './App.css'

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        
        <Cabecalho/>
        <Rodape/>
      </div>
    </>
  )
}

