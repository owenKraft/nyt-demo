import React from 'react'

const SpecialOfferCTA = (props) => {
    const text = props.text || "Dig deeper into the moment."
    const linkText = props.linkText || "Special offer: Subscribe for $1 a week."

    return (
        <div className="full-width">
            <div className="special-offer-cta">
                <div className="border-div"></div>

                <span className="special-offer-cta-text full-width">
                    {text}
                </span>

                <a href="#" className="special-offer-cta-link full-width">
                    {linkText}
                </a>

                <div className="border-div"></div>
            </div>
        </div>
    )
}

export default SpecialOfferCTA