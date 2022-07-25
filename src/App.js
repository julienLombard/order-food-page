import React, { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [{ categories }] = data;
  const [{ products }] = data;
  const [active, setActive] = useState('');
  const [selectedProducts, setSelectedProducts] = useState(products);

  const categoriesHandler = (category) => {
    setActive(category);
  };

  const selectedProductsHandler = (category) => {
    setSelectedProducts(
      category !== 'All'
        ? products.filter((product) => product.category === category)
        : products
    );

    categoriesHandler(category);
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
                    active === category.name
                      ? 'category-div-active'
                      : 'category-div'
                  }
                  key={category.name}
                  onClick={() => selectedProductsHandler(category.name)}
                >
                  <img src={category.image} alt={category.name} />
                  <h2>{category.name ? category.name : 'categorie'}</h2>
                </div>
              ))
            : null}
        </div>

        {/* Products */}
        <div className="products-div">
          {selectedProducts
            ? selectedProducts.map((product) => (
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
