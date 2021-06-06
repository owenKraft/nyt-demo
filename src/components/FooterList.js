import React from 'react'

const FooterList = (props) => {
    const header = props.header || "header"
    const listArr = props.listArr || ["list item","list item","list item"]

    return (
        <div className="footer-list">
            <header className="footer-list-header">
                {header}
            </header>

            <div>
                {listArr.map(item => <a href="#">{item}</a> )}
            </div>
        </div>
    )
}

export default FooterList