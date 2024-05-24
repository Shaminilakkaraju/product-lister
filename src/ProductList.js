import React from 'react';
import Product from './Product';
import './styles.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          photo={product.photo}
          mfg={product.mfg}
          price={product.price}
          remarks={product.remarks}
        />
      ))}
    </div>
  );
};

export default ProductList;
