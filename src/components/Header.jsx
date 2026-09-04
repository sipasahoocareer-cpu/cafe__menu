import React from "react";

export default function Header({ restaurant, cartCount }) {
  return (
    <header className="app-header">
      <div className="brand-mark">S<br />F</div>
      <div className="brand-copy">
        <h1>{restaurant.name}</h1>
      </div>
    </header>
  );
}
