 import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="main-navbar">
      <a href="/Home" className="nav-logo">
        Shop<span>Verse</span>
      </a>

      <div className="nav-links">
        <a href="/Home">Home</a>
        <a href="/Aboutbar">About</a>
        <a href="/shop">Shop</a>
        <a href="/cart" className="cart-link">
          <span className="cart-icon">🛒</span>
          Cart
        </a>
      </div>
    </nav>
  );
}