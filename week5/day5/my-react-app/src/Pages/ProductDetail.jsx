import { useParams } from "react-router-dom";
import products from "../data/product";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} width="300" />

      <h1>{product.name}</h1>

      <h3>{product.category}</h3>

      <p>
        <strong>Price:</strong> ${product.price}
      </p>

      <p>
        <strong>Rating:</strong> ⭐ {product.rating}
      </p>

      <p>
        <strong>Stock:</strong> {product.stock}
      </p>

      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;