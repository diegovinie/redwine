import React from 'react';
import CatalogTabCard from './CatalogTabCard';

const isEven = num => num % 2 === 0;

const CatalogTab = props => {
  const {id, products, active} = props;
  
  const createCardView = product => 
    <CatalogTabCard 
      key={product.name + product.price}
      name={product.name } 
      price={ product.price } 
      text={ product.text } 
      image={ product.image }
      />
  ;
  
  const oddProductViews = products
    .filter((item, index) => !isEven(index + 1))
    .map(createCardView)
  ;
    
  const evenProductViews = products
    .filter((item, index) => isEven(index + 1))
    .map(createCardView)
  ;
    
  return (
    <div className={`tab-pane fade in ${active ? 'active' : ''}`} id={ id }>
      <div className="mu-tab-content-area">
        <div className="row">

          <div className="col-md-6">
            <div className="mu-tab-content-left">
              <ul className="mu-menu-item-nav">
                { oddProductViews }
              </ul>
            </div>
          </div>

         <div className="col-md-6">
           <div className="mu-tab-content-right">
              <ul className="mu-menu-item-nav">
                { evenProductViews }
              </ul>
           </div>
         </div>

       </div>
     </div>
    </div>
  ); 
}


export default CatalogTab;
