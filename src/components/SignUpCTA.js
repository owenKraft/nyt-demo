import React from 'react'

const SignUpCTA = (props) => {
    const leadText = props.leadText || "SIGN UP FOR SCIENCE TIMES:"
    const descriptionText = props.descriptionText || "Get stories that capture the wonders of nature, the cosmos and the human body."

    return (
        <div className="full-width">
            <div className="sign-up-cta">
                <div className="sign-up-cta-text">
                    <span className="sign-up-cta-text-lead">
                        {leadText}
                    </span>
                    &nbsp;
                    <span className="sign-up-cta-text-description">
                        {descriptionText}
                    </span>
                </div>
                <button>
                    Sign Up
                </button>
            </div>
        </div>

    )
}

export default SignUpCTA