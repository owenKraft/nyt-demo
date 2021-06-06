import React from 'react'
import Logo from '../resources/logo.png'
import FooterList from './FooterList'
import FooterAffordances from './FooterAffordances'

const Footer = (props) => {
    const footerBottomLinks = ["© 2021 The New York Times Company","NYTCo","Contact Us","Accessibility","Work with us","advertise","t brand studio","your ad choices","privacy policy","terms of service","terms of sale","site map","help","subscriptions"]
    

    return (
        <div className="footer">
            <div className="footer-top-row">
                <img src={Logo} alt="logo" className="logo"></img>

                <a href="#">Go to Home Page >></a>
            </div>

            <div className="footer-list-area">
                <FooterList
                    header = "news"
                    listArr = {["Home Page","world","coronavirus","U.S.","politics","new york","business","tech","science","sports","obituaries","today's paper","corrections","trending"]}
                />
                <FooterList
                    header = "opinion"
                    listArr = {["today's opinion","columnists","editorials","guest essays","letters","sunday review","video: opinion"]}
                />
                <FooterList
                    header = "arts"
                    listArr = {["today's arts","art & design","books","best sellers book list","dance","movies","music","pop culture","television","theater","video: arts"]}
                />
                <FooterList
                    header = "living"
                    listArr = {["at home","automotive","games","education","food","health","jobs","love","magazine","parenting","real estate","style","t magazine","travel"]}
                />
                <FooterList
                    header = "more"
                    listArr = {["reader center","wirecutter","cooking","live events","the learning network","tools & services","podcasts","multimedia","photography","video","timesmachine","NYT store","manage my account","NYTLicensing"]}
                />
                <FooterAffordances 
                
                />
            </div>

            <div className="footer-bottom-links">
                {footerBottomLinks.map(item => <a href="#">{item}</a>)}
            </div>
        </div>
    )
}

export default Footer