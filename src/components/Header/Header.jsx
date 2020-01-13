import React from 'react';
import Helmet from "react-helmet";
import config from "../../../data/SiteConfig";

const Header = props => (
  <header id="mu-header">
    <Helmet title={`About | ${config.siteTitle}`} />
    <nav className="navbar navbar-default mu-main-navbar" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <a className="navbar-brand" href="index.html"><img src="assets/img/logo.png" alt="Logo img" /></a>


        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul id="top-menu" className="nav navbar-nav navbar-right mu-main-nav">
            <li><a href="index.html">HOME</a></li>
            <li><a href="#mu-about-us">ABOUT US</a></li>
            <li><a href="#mu-restaurant-menu">MENU</a></li>
            <li><a href="#mu-reservation">RESERVATION</a></li>
            <li><a href="#mu-gallery">GALLERY</a></li>
            <li><a href="#mu-chef">OUR CHEFS</a></li>
            <li><a href="#mu-contact">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
