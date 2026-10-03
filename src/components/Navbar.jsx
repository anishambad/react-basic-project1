import React ,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({products ,setProducts}) => {

  const[searchValue , setSearchValue] = useState("")

  const searchProduct = async () =>{

      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchValue}`
      );
      const data = await response.json();
      setProducts(data.products)   
                                   
    }
  return (
    
    <>
    <div className=' py-3 flex items-center justify-evenly shadow-md mb-10'>
        <h1 className='text-2xl font-extrabold'>Project 1</h1>
        <div>
            <input onChange={(e)=>setSearchValue(e.target.value)} type="text" placeholder='search here' className='px-3 py-1 w-[40vw] outline-none border border-gray-400 rounded active hover:border-gray-900' />
            <button onClick={searchProduct} className='px-3 py-1 bg-gray-300 rounded text-white ml-2 hover:bg-gray-700'>Search</button>
        </div>

        <ul className='flex gap-5 font-bold text-xl'>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
        </ul>
    </div>

    </>
  )
}

export default Navbar
