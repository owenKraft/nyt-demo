import React from 'react'
import HeaderAffordances from './HeaderAffordances'

const ArticleBottom = (props) => {
    const text = props.text || "A version of this article appears in print on March 18, 2014, Section A, Page 1 of the New York edition with the headline: Space Ripples Reveal Big Bang’s Smoking Gun."
    const numOfComments = props.numOfComments || 123

    return (
        <div className="article-bottom full-width">
            <div className="article-bottom-text">
                {text}

                &nbsp;

                <a href="#">Order Reprints</a>

                &nbsp;

                |

                &nbsp;

                <a href="#">Today's Paper</a>

                &nbsp;

                |

                &nbsp;

                <a href="#">Subscribe</a>
            </div>

            <div className="article-bottom-affordances">
                <button className="article-bottom-read-button">
                    Read {numOfComments} comments
                </button>

                <div className="article-bottom-toolbar">
                    <HeaderAffordances 
                        trim = {true}
                    />
                </div>
            </div>
        </div>
    )
}

export default ArticleBottom