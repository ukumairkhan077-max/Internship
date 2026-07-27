import { Link } from "react-router-dom";
import products from "../data/product";

function Products() {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <div className="card">
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>${product.price}</p>

            <p>⭐ {product.rating}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Products;