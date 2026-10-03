import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Cart from './pages/Cart'

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

const App = () => {
  const [products, setProducts] = useState([]); /*it was in hero.jsx but we wanted to access it in Navbar.jsx therefore we placed it here*/ 
  return (


    <div>

      <Router>
        <Navbar products={products} setProducts={setProducts}/>
        <Routes>
          <Route path="/" element={<Hero products={products} setProducts={setProducts} />}/>
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
      
      
    </div>
  )
}

export default App
