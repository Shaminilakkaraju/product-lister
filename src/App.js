import './App.css';
import React from 'react';
import ProductList from './ProductList';
import Saree1Image from './images/saree1.jpg';
import Saree2Image from './images/saree2.jpg';
import Saree3Image from './images/saree3.jpg';
import Saree4Image from './images/saree4.jpg';
import Saree5Image from './images/saree5.jpg';
import Saree6Image from './images/saree6.jpg';

const products = [
  {
    id: 1,
    price: 3499,
    photo: Saree1Image,
    mfg: 'Swatantra',
    remarks: 'Dual Shade Wine Shimmer Chiffon Saree ',
  },
  {
    id: 2,
    price: 5599,
    photo: Saree2Image,
    mfg: 'Nyri',
    remarks: 'Party All Over Stones With Scallop Border Organza Peach Saree',
  },
  {
    id: 3,
    price: 8249,
    photo: Saree3Image,
    mfg: 'Akhilam',
    remarks: 'Womens silk Blend Grey Woven Designer saree',
  },
  {
    id: 4,
    price: 5490,
    photo: Saree4Image,
    mfg: 'Koski',
    remarks: 'Onion Pink Swarovski Mirror Semi Crepe designer Saree',
  },
  {
    id: 5,
    price: 3450,
    photo: Saree5Image,
    mfg: 'Suta',
    remarks: 'Purple Embellished Sequins Pure Cotton Saree',
  },
  {
    id: 6,
    price: 6995,
    photo: Saree6Image,
    mfg: 'Kalki Fashion',
    remarks: 'Blue Satin Saree with Printed Detail',
  }
];

const App = () => {
  return (
    <div className="App">
      <h1>Saree Collection</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
