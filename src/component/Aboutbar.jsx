 import "./Aboutbar.css";

export function Aboutbar() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="about-tag">About ShopVerse</p>
        <h1>Shopping With Neon Energy</h1>
        <p>
          ShopVerse is a futuristic e-commerce website built for smart watches,
          headphones, sneakers, and bold everyday products.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To make online shopping fast, stylish, simple, and exciting for every
            customer.
          </p>
        </div>

        <div className="about-card">
          <h2>What We Sell</h2>
          <p>
            Trendy smart watches, powerful headphones, fresh sneakers, and
            premium accessories.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Choose Us</h2>
          <p>
            Clean design, modern products, smooth browsing, and a next-level
            shopping experience.
          </p>
        </div>
      </section>

      <section className="about-banner">
        <h2>Built For The Future Of Shopping</h2>
        <p>Neon theme. Premium products. Smooth user experience.</p>
      </section>
    </main>
  );
}