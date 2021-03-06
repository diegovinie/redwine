import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

class Footer extends Component {
  render() {
    // const { config } = this.props;
    // const url = config.siteRss;
    // const { copyright } = config;
    // if (!copyright) {
    //   return null;
    // }
    return (
      <footer id="mu-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="mu-footer-area">
               <div className="mu-footer-social">
                <a href="#"><span className="fa fa-facebook"></span></a>
                <a href="#"><span className="fa fa-twitter"></span></a>
                <a href="#"><span className="fa fa-google-plus"></span></a>
                <a href="#"><span className="fa fa-linkedin"></span></a>
                <a href="#"><span className="fa fa-youtube"></span></a>
              </div>
              <div className="mu-footer-copyright">
                <p>&copy; Copyright <a rel="nofollow" href="http://markups.io">markups.io</a>. All right reserved.</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
