import { Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import NavBar from './components/navBar/NavBar'
import ReadMore from './components/ReadMore/ReadMore'

function App() {

  return (
    <>

          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product/:productid' element={<ReadMore/>}/>
          </Routes>

      

    </>
  )
}

export default App
