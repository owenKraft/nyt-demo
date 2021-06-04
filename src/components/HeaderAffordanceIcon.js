import React from 'react'

const HeaderAffordanceIcon = (props) => {
    const source = props.source || ""
    const alt = props.alt || ""

    return (
        <div className="header-affordance-icon">
            <img src={source} alt={alt}></img>
        </div>
    )
}

export default HeaderAffordanceIcon