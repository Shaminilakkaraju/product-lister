import React from 'react';

const Product = ({ name, price, photo, mfg, remarks }) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name} className="product-image" />
      <div className="product-details">
        <p className="mfg">{mfg}</p>
        <p className="price">₹{price}</p>
        <p className="remarks">{remarks}</p>
      </div>
    </div>
  );
};

export default Product;
