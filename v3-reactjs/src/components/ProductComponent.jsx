export function ProductComponent( {product} ) {
  return (
    <tr>
      <td>{product.title}</td>
      <td className="notOnMobile">
        <span className={`category ${product.category}`}>{product.category}</span>
      </td>
      <td>{product.price}€</td>
      <td>{Math.round(product.price * 1.20)}€</td>
    </tr>
  );
}
