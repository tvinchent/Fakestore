import { ProductComponent } from './ProductComponent';
import { useEffect, useState } from 'react';

export function ProductsContainerComponent() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // Fetch products from the fake store
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <section id="products" className="grisclair">
        <h2>Products management</h2>
        <table>
          <thead>
            <tr className="bleu">
              <th>Product name</th>
              <th className="notOnMobile">Category</th>
              <th>Price</th>
              <th>Price (including VAT)</th>
            </tr>
          </thead>
          <tbody id="contentToFeed">
            {productList.map((product) => (
              <ProductComponent key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
