import React from "react";
import { MapPin, MessageCircle, Phone, Search } from "lucide-react";

export default function Hero({ restaurant, searchQuery, onSearch }) {
  return (
    <section className="hero-panel">
      <div className="hero-copy">
        <div className="hero-details">
          <h1>{restaurant.name}</h1>
          <p className="hero-location"><MapPin size={18} /> {restaurant.address}</p>
          <div className="hero-contact-actions">
            <a href={`tel:+91${restaurant.callNumber}`} aria-label={`Call ${restaurant.callNumber}`}>
              <Phone size={17} />
              <span>Call {restaurant.callNumber}</span>
            </a>
            <a href={`https://wa.me/91${restaurant.whatsappNumber}`} target="_blank" rel="noreferrer" aria-label={`WhatsApp ${restaurant.whatsappNumber}`}>
              <MessageCircle size={17} />
              <span>WhatsApp {restaurant.whatsappNumber}</span>
            </a>
          </div>
        </div>
        <label className="menu-search">
          <Search size={24} />
          <input value={searchQuery} onChange={(event) => onSearch(event.target.value)} placeholder="Search your favourite food" />
        </label>
      </div>
    </section>
  );
}
