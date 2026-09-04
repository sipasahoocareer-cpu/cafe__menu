import React from "react";
import { Search } from "lucide-react";

export default function Hero({ restaurant, searchQuery, onSearch }) {
  return (
    <section className="hero-panel">
      <div className="hero-copy">
        <p>WELCOME TO SAI FOOD HUB</p>
        <h2>What would you like today?</h2>
        <span>{restaurant.serviceNote}</span>
        <label className="menu-search">
          <Search size={24} />
          <input value={searchQuery} onChange={(event) => onSearch(event.target.value)} placeholder="Search your favourite food" />
        </label>
      </div>
    </section>
  );
}
