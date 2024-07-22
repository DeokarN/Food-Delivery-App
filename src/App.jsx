import React, { useState } from 'react'
import Navbar from './componants/Navbar'
import { Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Placeorder from './pages/Placeorder'
import Footer from './componants/Footer'
import Loginpop from './componants/Loginpop'

const App = () => {

  const[showlogin,setshowlogin]=useState(false);
  return (
    <>
    {showlogin?<Loginpop setshowlogin={setshowlogin}/>:<></>}
    <div className='app'>
       <Navbar setshowlogin={setshowlogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Placeorder/>}/>
        </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App