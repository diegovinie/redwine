import React from 'react';
import './Header.scss';
import Helmet from "react-helmet";
import config from "../../../data/SiteConfig";

const {siteTitle, siteLogo} = config;

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

          <a className="navbar-brand" href="index.html">
            <img
              className="navbar-brand_image"
              src={ siteLogo }
              alt={ siteTitle } />
          </a>


        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul id="top-menu" className="nav navbar-nav navbar-right mu-main-nav">
            <li><a href="index.html">INICIO</a></li>
            <li><a href="#mu-about-us">SOBRE MI</a></li>
            <li><a href="#mu-restaurant-menu">MENU</a></li>
            <li><a href="#mu-contact">CONTACTO</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
