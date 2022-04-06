import React from 'react'
import './Nav.css'

export const Nav = () => {
  return (
     <header >
    <nav className='navs'>
        <div className='navs-logo'>
            <a className='logo1' href="">PATREON</a>
            <a className='logo2' href="">Blog</a>
        </div>

        <div className='navs-item'>
            <input className='input' type="text" placeholder='Search all blog posts...' />
            <p className='break'>|</p>
            <button className='navs-btn'>Start My Page</button>
        </div>
    </nav>
</header>
  )
}
