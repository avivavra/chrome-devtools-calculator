import React from "react";
import Calculator from "./Calculator";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./App.css";

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Navbar />
                <Calculator />
                <Footer />
            </div>
        );
    }
}
