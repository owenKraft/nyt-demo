import React from 'react'
import HeaderAffordanceIcon from './HeaderAffordanceIcon'
import Facebook from '../resources/facebook.png'
import WhatsApp from '../resources/whatsapp.png'
import Twitter from '../resources/twitter.png'
import Email from '../resources/email.png'
import Share from '../resources/share.png'
import Save from '../resources/save.png'

const HeaderAffordances = (props) => {
    let nonShareAffordances
    
    if (props.trim) {
        nonShareAffordances = ""
    } else {
        nonShareAffordances = <div className="non-share-affordances">
                                <div className="save-icon-wrapper">
                                    <img className="save-icon" src={Save} alt="save article"></img>
                                </div>
                                <div className="comments-icon-wrapper">
                                    <i class="far fa-comment-alt"></i>
                                    <span class="num-of-comments">123</span>
                                </div>
                            </div>
    }

    return (
        <div className="header-affordances">
            <HeaderAffordanceIcon 
                source = {Facebook}
                alt="share article on Facebook"
            />
            <HeaderAffordanceIcon 
                source = {WhatsApp}
                alt="share article on WhatsApp"
            />
            <HeaderAffordanceIcon 
                source = {Twitter}
                alt="share article on Twitter"
            />
            <HeaderAffordanceIcon 
                source = {Email}
                alt="email article"
            />
            <HeaderAffordanceIcon 
                source = {Share}
                alt="share article"
            />

            {nonShareAffordances}
        </div>
    )
}

export default HeaderAffordances