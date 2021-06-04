import React from 'react'
import HeaderAffordances from './HeaderAffordances'

const ArticleHeader = (props) => {
    const headerText = props.headerText || "Space Ripples Reveal Big Bang’s Smoking Gun!!!"

    return (
        <div className="article-header full-width">
            <h1>{headerText}</h1>
            <HeaderAffordances />
        </div>
    )
}

export default ArticleHeader