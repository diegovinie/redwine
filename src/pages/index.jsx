import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Catalog from '../components/Catalog';

const IndexPage = props => {
  const dishesNodes = props.data.allMarkdownRemark.nodes;
  const dishes = dishesNodes.map(node => ({ ...node.frontmatter }))

  return (
    <Layout>
      <Header />
      <Banner />
      <Catalog products={dishes} />
      <Footer config={ {siteRrs: {} } } />
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
query fetchAllDishes {
  allMarkdownRemark(
    filter: {
      frontmatter: {type: {eq: "dish"} }
    }
  ) {
    nodes {
      frontmatter {
        name
        price
        altName
        category
        type
      }
    }
  }
}

`
