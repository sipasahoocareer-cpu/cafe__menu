import React from "react";
export default function CategoryTabs({ dietaryFilters, activeDiet, onDietChange }) {
  return (
    <nav className="dietary-tabs" aria-label="Dietary filters">
      {dietaryFilters.map((filter) => (
        <button className={filter.id === activeDiet ? "active" : ""} key={filter.id} type="button" onClick={() => onDietChange(filter.id)}>
          {filter.label}
        </button>
      ))}
    </nav>
  );
}
