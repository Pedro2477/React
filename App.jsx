import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { HashRouter } from "react-router-dom";

import Router from "./Router";
import Logo from "../componente/template/logo";
import Nav from "../componente/template/Nav";
//Main, nele já import o Header
import Footer from "../componente/template/Footer";

export default props => (
    <HashRouter>
    <div className="app">
        <Logo />
        <Nav />
        <Router />
        <Footer />
    </div>
    </HashRouter>
);