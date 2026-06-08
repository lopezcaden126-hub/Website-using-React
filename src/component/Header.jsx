 export function Header() {
  return (
    <>
      <div className="dragon-layer" aria-hidden="true">
        <svg className="flying-dragon" viewBox="0 0 900 360">
          <path
            className="dragon-body"
            d="M95 220 C180 95, 290 300, 390 165 C500 20, 620 285, 770 125"
          />

          <path
            className="dragon-belly"
            d="M118 220 C195 130, 285 278, 382 175 C500 50, 610 250, 748 140"
          />

          <path className="dragon-tail" d="M95 220 L28 184 L56 238 Z" />

          <path
            className="dragon-head"
            d="M748 96 L842 82 L872 118 L844 154 L766 145 L722 120 Z"
          />

          <path className="dragon-mouth" d="M830 126 L884 112 L842 142 Z" />

          <path className="dragon-horn" d="M774 89 L794 32 L812 92 Z" />
          <path className="dragon-horn" d="M815 86 L846 38 L850 102 Z" />

          <path
            className="dragon-mane"
            d="M170 130 L145 82 L210 112 L205 64 L260 118 L270 72 L315 135 L335 88 L370 150 L405 96 L420 170 L470 102 L470 188 L525 118 L512 205 L570 145 L548 230"
          />

          <circle className="dragon-eye" cx="825" cy="108" r="8" />
          <circle className="dragon-eye-glow" cx="825" cy="108" r="18" />

          <path className="dragon-whisker" d="M850 120 C910 98, 930 78, 970 52" />
          <path className="dragon-whisker" d="M842 138 C902 150, 932 170, 972 210" />

          <path className="dragon-claw" d="M355 190 L330 245 L365 225 L390 250" />
          <path className="dragon-claw" d="M585 190 L555 252 L592 230 L620 258" />

          <g className="dragon-scales">
            <circle cx="205" cy="185" r="10" />
            <circle cx="265" cy="205" r="10" />
            <circle cx="330" cy="190" r="10" />
            <circle cx="450" cy="145" r="10" />
            <circle cx="520" cy="170" r="10" />
            <circle cx="615" cy="190" r="10" />
            <circle cx="700" cy="145" r="10" />
          </g>
        </svg>
      </div>
      <nav className="navbar">
        <h2>ShopVerse</h2>

        <div className="nav-links">
          <a href="/Home">Home</a>
          <a href="/shop">Shop</a>
          <a href="/cart">Cart</a>
          <a href="/cart" className="cart-link">
  <span className="cart-icon">🛒</span>Cart</a>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-text">
          <span>New Drop Live</span>
          <h1>Shop Your Favorite Products</h1>
          
         <p className="hero-subtitle lightning-line stylish-bolt">
  Fashion, electronics, accessories, and more in one place.
</p>
          <button>Shop Now</button>
        </div>

        <div className="hero-display">
          <div className="sale-badge">SALE</div>
          <div className="deal-strip">UP TO 50% OFF</div>
        </div>
      </section>

      
    </>
  );
}

