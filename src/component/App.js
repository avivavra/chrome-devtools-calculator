import React from "react";
import Calculator from "./Calculator";

import "./App.css";
import Navbar from "./Navbar";

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Navbar />
                <Calculator />
            </div>
        );
    }
}
