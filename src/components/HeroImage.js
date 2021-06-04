import React from 'react'

const HeroImage = (props) => {
    const source = props.source || ""
    const alt = props.alt || ""
    const attribution = props.attribution || "Lorem ipsum dolor"

    return (
        <div className="hero-image-wrapper full-width">
            <img src={source} alt={alt} className="hero-image full-width"></img>
            <p className="hero-image-desc"> 
                {alt}
                &nbsp;
                <span className="hero-image-author">
                    {attribution}
                </span>
            </p>
        </div>
    )
}

export default HeroImage