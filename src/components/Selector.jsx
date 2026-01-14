import React from 'react'
import { Link } from 'react-router-dom'

function Selector() {
  return (
    <div className='flex w-full items-center text-[20px] text-xl justify-center py-3 gap-7'>
      <Link to="/half-adder" className='border-2 border-black px-2 py-1 rounded-2xl'>
        Half Adder
      </Link>  
      <Link to="/full-adder" className='border-2 border-black px-2 py-1 rounded-2xl'>
        Full Adder
      </Link>
    </div>
  )
}

export default Selector
