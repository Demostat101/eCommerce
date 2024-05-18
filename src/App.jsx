import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import NavBar from './components/navBar/NavBar'
import ReadMore from './components/ReadMore/ReadMore'

function App() {

  return (
    <>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:productid' element={<ReadMore/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
      </BrowserRouter>

      

    </>
  )
}

export default App
