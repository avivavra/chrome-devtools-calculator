import React from "react";

import "./Navbar.css";

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-header">Calculator</div>
                <div className="navbar-summary">
                    <button>Saved Calculations</button>
                    <button>Sign Up</button>
                    <img className="site-logo" src="favicon.ico" alt="Site Logo" />
                </div>
            </div>
        );
    }
}
