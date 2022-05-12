import React from "react";

import "./Footer.css";

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-item">Contact Us: calculator@gmail.com</div>
                <img className="site-logo" src="favicon.ico" alt="Site Logo" />
            </div>
        );
    }
}
