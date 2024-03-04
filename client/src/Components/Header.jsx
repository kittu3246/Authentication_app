import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
function Header() {
  return (
    <div className='bg-slate-500 '>
    <div className='flex  mx-auto justify-between items-center max-auto max-w-6xl p-4'>
   <Link to='/'> <h1 className='font-bold' >Auth App</h1></Link>
    <ul className='flex gap-6 cursor-pointer'>
        
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Profile'>Profile</Link></li>

        <li><Link to='/About'>About</Link></li>

        <li><Link to='/Signin'>Signin</Link></li>

    </ul>
    </div>
    </div>
  )
}

export default Header