import React from "react";

import "./Navbar.css";

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-header">
                    <img className="site-logo" src="favicon.ico" alt="Site Logo" />
                    <div className="site-name">Calculator</div>
                </div>
                <div className="navbar-summary">
                    <button className="navbar-button">History</button>
                    <button className="navbar-button">Saved Calculations</button>
                </div>
            </div>
        );
    }
}
