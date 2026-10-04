import React , {useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Cart from './pages/Cart'
import ProductContext from './context/ProductContext'

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

const App = () => {
  const [products , setProducts] = useState([]);
  
  return (


    <div>

    <ProductContext.Provider value={{products , setProducts}}>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero  />}/>
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
      
    </ProductContext.Provider>
      
    </div>
  )
}

export default App
