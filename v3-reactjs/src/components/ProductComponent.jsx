export function ProductComponent({ product }) {
  function productLink() {
    window.open(`product/${product.id}`, '_blank');
  }

  return (
    <tr onClick={productLink}>
      <td>{product.title}</td>
      <td className="notOnMobile">
        <span className={`category ${product.category}`}>{product.category}</span>
      </td>
      <td>{`${product.price}€`}</td>
      <td>{`${Math.round(product.price * 1.20)}€`}</td>
    </tr>
  );
}
