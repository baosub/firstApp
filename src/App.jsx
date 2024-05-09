import { useState } from 'react'
import './App.css'
import Btesting from './Btesting'
import Gallery from './DocumentationTutorial/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Btesting />
      <Gallery/>
    </>
  )
}

export default App
