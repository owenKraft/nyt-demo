import React from 'react'
import ArticleText from './ArticleText'

const ArticleSection = (props) => {
    const dateline = props.dateline || ""
    const text = props.text || ""
    const aside = props.aside || ""

    return (
        <div className="article-section full-width">
                <ArticleText 
                    dateline = {dateline}
                    text = {text}
                    aside = {aside}
                />
            

            {/* <div className="article-aside">
                {aside}
            </div> */}
        </div>
    )
}

export default ArticleSection