import React from 'react'
import logo from '../assets/react.svg'
function Navbar() {
  return (
    <div>
     
      <nav  className='flex  justify-around font-semibold from-neutral-300 my-8 items-center  '>
        <img src={logo} alt="" />
        <ul className='flex'>
            <li className='text-xl'>
                <a className='mx-2 opacity-45  hover:opacity-75 rounded-md   ' href="/">home</a>
                <a className ='mx-2 opacity-45  hover:opacity-75  rounded-md' href="/">about</a>
                <a className='mx-2 opacity-45  hover:opacity-75 rounded-md' href="/">sign up </a>
                <a className='mx-2 opacity-45  hover:opacity-75 rounded-md' href="/">login</a>
            </li>
        </ul>
         <button >Submit</button>
      </nav>
    </div>
  )
}

export default Navbar
