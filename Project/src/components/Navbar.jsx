import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()
  return (
    <div className='navbar'>
        <h2>
            MediaSearch
        </h2>
        <div>
        <button onClick={() => {
            navigate('/collection')
        }}>Collection</button>

        <Link to={'/'} className='link'><button>Home</button></Link>

        </div>
    </div>
  )
}

export default Navbar