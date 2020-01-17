import React from 'react';

const CatalogTabCard = props => {
  const {name, price, description, image} = props;
  
  return (
    <li>
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src={ image || '/assets/img/menu/item-1.jpg' } alt="img"/>
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">
            <a href="#">{ name || 'English Breakfast' }</a>
          </h4>
          <span className="mu-menu-price">{ price || '$15.85' }</span>
          <p>{ description || 'Description of the product.' }</p>
        </div>
      </div>
    </li>
  );
}


export default CatalogTabCard;
