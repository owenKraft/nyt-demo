import React from 'react'

const ArticleText = (props) => {
    const dateline = props.dateline || ""
    const text = props.text || test
    const aside = props.aside || ""

    return (
        <div className="article-text">
            {dateline}
            {text}
            <div className="article-aside">
                {aside}
            </div>
        </div>
    )
}

export default ArticleText