import React from "react";
import { ChevronRight, ShoppingBag } from "lucide-react";

export default function CartBar({ totalItems, totalPrice }) {
  if (totalItems === 0) return null;

  return (
    <aside className="cart-bar" aria-label="Cart summary">
      <div className="cart-left">
        <span className="cart-icon-wrap">
          <ShoppingBag size={34} />
          <em>{totalItems}</em>
        </span>
        <strong>{totalItems} items</strong>
      </div>
      <div className="cart-divider" />
      <button type="button">
        ₹{totalPrice} • View Cart
        <ChevronRight size={28} />
      </button>
    </aside>
  );
}
