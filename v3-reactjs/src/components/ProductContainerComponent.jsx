import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function ProductContainerComponent() {
  const [productData, setProductData] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    // Fetch product from the fake store
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, [productId]); // Include productId in the dependency array

  const handleInputChange = (event) => {
    // Handle input change here
    console.log(event.target.value);
  };

  return (
    <div className='productV2'>
      <a href="/" className="lienRetour">Retour</a>
      <h2 className="productTitle">{productData.title}</h2>
      <div className="product3col">
        <div className="imageContainer"><img src={productData.image} alt={productData.title} /></div>
        <div className="descAndPrice">
          <h3>Description</h3>
          <div className="description">{productData.description}</div><br />
          <h3>Price</h3>
          <form name={`product${productData.id}`} action="" method="get">
            <input
              type="text"
              className="inputPrice"
              name={`product${productData.id}price`}
              id={`product${productData.id}price`}
              value={productData.price}
              onChange={handleInputChange}
            /><br /><br />
            <input type="submit" id={`product${productData.id}priceAction`} value="Update product" disabled />
          </form>
          <div className="vat"><strong>Price</strong> (including VAT): <span id="priceTVA">{Math.round(productData.price * 1.20)}</span></div>
        </div>
        <div>
          <h3>Category</h3>
          <span className={`category ${productData.category}`}>{productData.category}</span>
        </div>
      </div>
      <br />
    </div>
  );
}
