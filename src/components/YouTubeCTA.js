import React from 'react'

const YouTubeCTA = (props) => {
    const description = props.description || "Stanford Professor Andrei Linde celebrates physics breakthrough"
    const attribution = props.attribution || "Video by StanfordUniversity"

    return (
        <div className="full-width">
            <div className="youtube-cta">
                <div className="youtube-wrapper">
                    <iframe className="youtube-embed" src="https://www.youtube.com/embed/ZlfIVEy_YOA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="youtube-description">
                    <span className="youtube-description-text">
                        {description}
                    </span>

                    <span className="youtube-description-attribution">
                        {attribution}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default YouTubeCTA