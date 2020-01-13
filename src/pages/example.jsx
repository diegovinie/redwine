import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Catalog from '../components/Catalog';

const ExamplePage = props => (
  <Layout>
    <Header />
    <Banner />
    <Catalog />
    <Footer config={ {siteRrs: {} } } />
  </Layout>
);

export default ExamplePage;
