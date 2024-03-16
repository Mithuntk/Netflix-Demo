import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/Rowpost/RowPost'
import './App.css'
import {Orginals,Action, comedy, Horror, Romance} from './Url'
function App() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <RowPost url={Orginals} title='Netflix originals'/>
        <RowPost url={Action}title='Actions' isSmall/>
        <RowPost url={comedy}title='Comedy' isSmall/>
        <RowPost url={Horror}title='Horror' isSmall/>
        <RowPost url={Romance}title='Romance' isSmall/>
    </div>
  )
}

export default App