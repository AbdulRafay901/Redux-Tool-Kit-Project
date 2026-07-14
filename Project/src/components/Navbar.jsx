import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()
  return (
    <div className='navbar'>
        <h2>
            MediaSearch
        </h2>
        <button onClick={() => {
            navigate('/collection')
        }}>Collection</button>
    </div>
  )
}

export default Navbar