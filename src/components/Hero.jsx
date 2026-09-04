import React from "react";
import { Search } from "lucide-react";

export default function Hero({ searchQuery, onSearch }) {
  return (
    <section className="hero-panel">
      <div className="hero-copy">
        <label className="menu-search">
          <Search size={24} />
          <input value={searchQuery} onChange={(event) => onSearch(event.target.value)} placeholder="Search your favourite food" />
        </label>
      </div>
    </section>
  );
}
