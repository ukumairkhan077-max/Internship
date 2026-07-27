import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>ShopEase</h2>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/products">Featured Product</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;