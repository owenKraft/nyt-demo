import React from 'react'
import Hamburger from './Hamburger'

const NavLeft = (props) => {
    const category = "space & cosmos"

    return (
        <div className="nav-left">
            <Hamburger 
                height = {16}
                width = {16}
            />
            <i class="fas fa-search"></i>
            <div className="nav-category">
                {category}
            </div>
        </div>
    )
}

export default NavLeft