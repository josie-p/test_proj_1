import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home, TestComponent, Connect } from "./";

const Main = () => {
    return(
        <div id="main">
            <Navbar/>
            <Routes>
                <Route exact path="/" element={ < Home/> } />
                <Route exact path="/test" element={ <TestComponent/> } />
                <Route exact path="/connect" element={ <Connect/> } />
            </Routes>
        </div>
    )
}

export default Main;