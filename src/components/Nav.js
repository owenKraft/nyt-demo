import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import Logo from '../resources/logo.png'


const Nav = (props) => {
    

    return (
        <div className="nav">
            <NavLeft />
            <div className="logo-wrapper">
                <img src={Logo} alt="logo" className="logo"></img>
            </div>
            <NavRight />
        </div>
    )
}

export default Nav