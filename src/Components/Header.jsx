import React from 'react'

const Header = () => {
  return (
    <nav>
        <div className='bg-black text-white'>
            <div className='wrapper_logo'>
                <img src={"/"} alt="logo" />
            </div>
            <div className='nav_menu_wrapper'>
                <div>Home</div>
                <div>About</div>
                <div>Menu</div>
            </div>
        </div>
    </nav>
  )
}

export default Header