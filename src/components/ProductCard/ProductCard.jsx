const ProductCard = ({ product, onSelect }) => {
  return (
    <div className="product-card" onClick={() => onSelect(product)}>
      <figure className="product-card__img">
        <img src={product.img} />
      </figure>
      <h4>{product.name}</h4>
      <p className="product-card__price">Desde {product.price}€</p>
    </div>
  );
};

export default ProductCard;
