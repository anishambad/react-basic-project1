import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'


const App = () => {
  const [products, setProducts] = useState([]); /*it was in hero.jsx but we wanted to access it in Navbar.jsx therefore we placed it here*/ 
  return (


    <div>
      <Navbar products={products} setProducts={setProducts}/>
      <Hero products={products} setProducts={setProducts} />
    </div>
  )
}

export default App
