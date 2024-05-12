import { useState } from 'react'
import './App.css'
import Btesting from './Btesting'
import Gallery from './DocumentationTutorial/Gallery'
import SomeJs from './DocumentationTutorial/SomeJs'
import AuseStateHook from './reactHooks/AuseStateHook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Btesting />
      <Gallery />
      <SomeJs />
      <AuseStateHook/>
    </>
  )
}

export default App
