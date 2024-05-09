import { useState } from 'react'
import './App.css'
import Btesting from './Btesting'
import Gallery from './DocumentationTutorial/Gallery'
import SomeJs from './DocumentationTutorial/SomeJs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Btesting />
      <Gallery />
      <SomeJs />
    </>
  )
}

export default App
