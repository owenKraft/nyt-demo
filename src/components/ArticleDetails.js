import React from 'react'

const ArticleDetails = (props) => {
    const author = props.author || ""
    const date = props.date || ""

    return (
        <div className="article-details full-width">
            <p className="article-author">
                By <a href="#">{author}</a>
            </p>

            <p className="article-date">
                {date}
            </p>
        </div>
    )
}

export default ArticleDetails