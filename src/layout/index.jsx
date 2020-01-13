import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />

          <html lang="en" />
          <link href="assets/css/font-awesome.css" rel="stylesheet"/>
          <link href="assets/css/bootstrap.css" rel="stylesheet"/>
          <link rel="stylesheet" type="text/css" href="assets/css/slick.css"/>
          <link rel="stylesheet" type="text/css" href="assets/css/bootstrap-datepicker.css"/>
          <link href="assets/css/magnific-popup.css" rel="stylesheet"/>
          <link id="switcher" href="assets/css/theme-color/default-theme.css" rel="stylesheet"/>

          <link href="style.css" rel="stylesheet"/>


          <link href='https://fonts.googleapis.com/css?family=Prata' rel='stylesheet' type='text/css'/>
          <link href='https://fonts.googleapis.com/css?family=Tangerine' rel='stylesheet' type='text/css'/>
          <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
        </Helmet>
        {children}
      </div>
    );
  }
}
