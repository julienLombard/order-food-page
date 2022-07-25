import React, { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [{ categories }] = data;
  const [{ products }] = data;
  const [selected, setSelected] = useState('');

  const categoriesHandler = (name) => {
    setSelected(name);
  };

  return (
    <div className="App">
      <main className="App-main">
        <h1>Menu</h1>

        {/* Categories */}
        <div className="categories-div">
          {categories
            ? categories.map((category) => (
                <div
                  className={
                    selected === category.name
                      ? 'category-div-active'
                      : 'category-div'
                  }
                  key={category.name}
                  onClick={() => categoriesHandler(category.name)}
                >
                  <img src={category.image} alt={category.name} />
                  <h2>{category.name ? category.name : 'categorie'}</h2>
                </div>
              ))
            : null}
        </div>

        {/* Products */}
        <div className="products-div">
          {products
            ? products.map((product) => (
                <div className="product-div" key={product.name}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name ? product.name : 'produit'}</h3>
                  <p>{product.price} €</p>
                </div>
              ))
            : null}
        </div>
      </main>
    </div>
  );
}

export default App;
