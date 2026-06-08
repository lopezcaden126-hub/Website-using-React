export function Products() {
  return (
    <section className="products">
      { <section className="products">
        <div className="section-title">
          <h2 className="featured-title">Featured Products</h2>
          <p>Hot picks for this week</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <div className="card" key={product.name}>
              <img src={product.image} alt={product.name} />
              
              

              <div className="card-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button>More</button>
                
                
                
              </div>
            </div>
          ))}
        </div>
      </section>}
    </section>
  );
}