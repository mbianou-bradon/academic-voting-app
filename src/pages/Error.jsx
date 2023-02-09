import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error() {
  return (
    <div className='flex items-center justify-center min-h-screen text-center'>
        <div>
            <h3 className='text-6xl font-extrabold mb-5'>404</h3>
            <p className='text-2xl mb-6'>Page Not Found</p>
            
            <NavLink to="/" className="w-fit px-6 py-2 bg-primary border border-primary hover:bg-white text-white hover:text-primary rounded-lg cursor-pointer">
                Goto Home
            </NavLink>
        </div>
    </div>
  )
}
