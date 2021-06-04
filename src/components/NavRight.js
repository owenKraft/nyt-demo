import React from 'react'

const NavRight = (props) => {

    return (
        <div className="nav-right">
            <button className="subscribe-btn">
                subscribe now
            </button>
            <button className="account-btn">
                account
                <i class="fas fa-chevron-down"></i>
            </button>

        </div>
    )
}

export default NavRight