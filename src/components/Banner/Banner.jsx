import React from 'react';
import config from "../../../data/SiteConfig";


const {siteTitle, siteDescription} = config;
const imagePath = '/images/home-banner.png';

const Banner = props => (
  <section id="mu-slider">
    <div className="mu-slider-area">

      <div className="mu-top-slider">

        <div className="mu-top-slider-single">
          <img src={ imagePath } alt={ siteTitle }/>
          <div className="mu-top-slider-content">
            <span className="mu-slider-small-title">Bienvenid@s a</span>
            <h2 className="mu-slider-title">{ siteTitle }</h2>
            <p>{ siteDescription }</p>
            <a href="#mu-restaurant-menu"
              className="mu-readmore-btn mu-reservation-btn">
              MIRA NUESTROS PLATOS
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
