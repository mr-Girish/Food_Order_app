import React from 'react'

const Header = () => {
  return (
    <nav>
        <div className='container'>
            <div className='wrapper-logo'>
                <img src={"/"} alt="logo" />
            </div>
            <div className='nav-menu_wrapper'>
                <div>Home</div>
                <div>About</div>
            </div>
        </div>
    </nav>
  )
}

export default Header