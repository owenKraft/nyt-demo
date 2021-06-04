import React from 'react'
import Cosmos from '../resources/images/cosmos.jpeg'

const ImageCTA = (props) => {
    const src = props.src || Cosmos
    const alt = props.alt || "The Bicep2 telescope, in the foreground, was used to detect the faint spiraling gravity patterns — the signature of a universe being wrenched violently apart at its birth."
    const attribution = props.attribution || "Steffen Richter/Associated Press"

    return (
        <div className="image-cta">
            <img src={src} alt={alt}></img>
            <div className="image-cta-description">
                <span className="image-cta-description-text">
                    {alt}
                </span>

                <span className="image-cta-description-attribution">
                    {attribution}
                </span>
            </div>
        </div>
    )
}

export default ImageCTA