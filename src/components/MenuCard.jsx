import React from "react";

export default function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <div className="dish-info">
        <div>
          <h3>{item.name}</h3>
          <p className="dish-description">{item.description}</p>
        </div>
        <div className="price-only">
          <span className={`food-type ${item.type}`} aria-label={item.type} />
          <strong>{item.price == null ? "Price at counter" : `₹${item.price}`}</strong>
        </div>
      </div>
    </article>
  );
}
