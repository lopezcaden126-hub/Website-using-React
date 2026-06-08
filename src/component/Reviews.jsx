export function Reviews() {
  const reviews = [
    {
      name: "Aarav",
      rating: "5.0",
      text: "The design is insane and the products look premium."
    },
    {
      name: "Maya",
      rating: "4.8",
      text: "Super smooth shopping experience and clean layout."
    },
    {
      name: "Rohan",
      rating: "5.0",
      text: "The smartwatch collection feels modern and stylish."
    }
  ];

  return (
    <section className="reviews-section">
      <div className="section-title">
        <h2 className="lightning-title">Customer Reviews</h2>
        <p>Real reactions from happy shoppers</p>
      </div>

      <div className="review-grid">
        {reviews.map((review) => (
          <div className="review-card" key={review.name}>
            <div className="rating">{review.rating}</div>
            <p>{review.text}</p>
            <h3>{review.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}