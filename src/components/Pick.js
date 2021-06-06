import React from 'react'
import Summer from '../resources/images/summer.jpeg'

const Pick = (props) => {
    const src = props.src || Summer
    const title = props.title || "Summertime … and the Sloganeering Is a Little Awkward"

    return (
        <div className="pick">
            <img src={src} alt></img>
            <h3>
                {title}
            </h3>
        </div>
    )
}

export default Pick