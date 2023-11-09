import { useState } from 'react'
import Sidenav from './Components/Sidenav'
import  Main  from './Components/main'
import Work from './Components/Work'
import Project from './Components/Project'



function App() {

  return (
    <>
      <Sidenav />
      <Main />
      <Work />
      <Project />
    </>
  )
}

export default App
