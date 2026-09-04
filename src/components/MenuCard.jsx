import React from "react";
import { Heart, Star } from "lucide-react";

export default function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <div className="dish-info">
        <button className="heart-button" type="button" aria-label={`Save ${item.name}`}>
          <Heart size={27} />
        </button>
        <div>
          <h3>{item.name}</h3>
          <p className="dish-description">{item.description}</p>
          <p>
            <Star size={21} fill="currentColor" />
            {item.rating}
          </p>
        </div>
        <div className="price-only">
          <span className={`food-type ${item.type}`} aria-label={item.type} />
          <strong>{item.price == null ? "Price at counter" : `₹${item.price}`}</strong>
        </div>
      </div>
    </article>
  );
}
