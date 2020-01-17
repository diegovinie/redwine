import React from 'react';
// import {groupBy} from '@diegovinie/js-utils'
import CatalogTab from './CatalogTab';

const grouper = prop => (acc, item) => {
  const key = item[prop]
  acc[key] = (acc[key] || []).concat(item)
  return acc
}

const capitalize = word => word[0].toUpperCase() + word.slice(1)

const groupBy = items => prop =>
  Array.isArray(items) ? items.reduce(grouper(prop), {}) : {}

const Catalog = props => {
  const { products } = props

  const sections = groupBy(products)('category')

  const tabs = Object.keys(sections)
    .map((category, index) =>
      <li key={category + index} className={index === 0 ? 'active' : ''}>
        <a href={`#${category}`} data-toggle="tab">
          { capitalize(category) }
        </a>
      </li>
    );

  const createSectionView = ([category, details], index) =>
    <CatalogTab
      key={'section-' + category}
      id={category}
      active={index === 0}
      products={details}
    />

  const sectionViews = Object.entries(sections)
    .map(createSectionView)

  return (
    <section id="mu-restaurant-menu">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-restaurant-menu-area">

              <div className="mu-title">
                <span className="mu-subtitle">Descubre</span>
                <h2>NUESTRO MENÚ</h2>
              </div>

              <div className="mu-restaurant-menu-content">
                <ul className="nav nav-tabs mu-restaurant-menu">
                  { tabs }
                </ul>

                <div className="tab-content">
                  { sectionViews }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
