import React from 'react'
import ArticleText from './ArticleText'

const ArticleSection = (props) => {
    const dateline = props.dateline || ""
    const text = props.text || ""

    return (
        <div className="article-section full-width">
            <ArticleText 
                dateline = {dateline}
                text = {text}
            />
            <div className="article-aside">
                
            </div>
        </div>
    )
}

export default ArticleSection