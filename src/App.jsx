import React, { useEffect, useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";
import CartBar from "./components/CartBar.jsx";
import CategoryTabs from "./components/CategoryTabs.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import MenuCard from "./components/MenuCard.jsx";
import { fallbackData } from "./data/fallback.js";

const API_URL = import.meta.env.VITE_API_URL;

export default function App() {
  const [data, setData] = useState(fallbackData);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeDiet, setActiveDiet] = useState("all");
  const [activeSection, setActiveSection] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState({});

  useEffect(() => {
    let ignore = false;

    if (!API_URL) {
      const items =
        activeCategory === "all"
          ? fallbackData.items
          : fallbackData.items.filter((item) => item.category === activeCategory);
      setData({ ...fallbackData, items });
      return undefined;
    }

    fetch(`${API_URL}/menu?category=${activeCategory}`)
      .then((response) => (response.ok ? response.json() : Promise.reject(response)))
      .then((nextData) => {
        if (!ignore) setData({ ...nextData, dietaryFilters: fallbackData.dietaryFilters });
      })
      .catch(() => {
        const items =
          activeCategory === "all"
            ? fallbackData.items
            : fallbackData.items.filter((item) => item.category === activeCategory);
        setData({ ...fallbackData, items });
      });

    return () => {
      ignore = true;
    };
  }, [activeCategory]);

  const visibleItems = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    return data.items.filter((item) => {
      const matchesDiet = activeDiet === "all" || item.type === activeDiet;
      const searchableText = `${item.name} ${item.category} ${item.type} ${item.description}`.toLowerCase();
      return matchesDiet && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [activeDiet, data.items, searchQuery]);

  const totals = useMemo(() => {
    return data.items.reduce(
      (summary, item) => {
        const quantity = cart[item.id] || 0;
        return {
          totalItems: summary.totalItems + quantity,
          totalPrice: summary.totalPrice + quantity * item.price
        };
      },
      { totalItems: 0, totalPrice: 0 }
    );
  }, [cart]);

  function handleAdd(item) {
    setCart((current) => ({ ...current, [item.id]: (current[item.id] || 0) + 1 }));
  }

  function handleRemove(item) {
    setCart((current) => {
      const nextQuantity = (current[item.id] || 0) - 1;
      const nextCart = { ...current };
      if (nextQuantity > 0) nextCart[item.id] = nextQuantity;
      else delete nextCart[item.id];
      return nextCart;
    });
  }

  function handleNavigation(section) {
    setActiveSection(section);
    if (section === "home") setActiveCategory("all");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="phone-shell">
      <Header restaurant={data.restaurant} cartCount={totals.totalItems} />
      {activeSection === "orders" ? (
        <section className="account-panel">
          <span className="panel-kicker">Table order</span>
          <h1>Orders</h1>
          <div className="order-summary">
            <div>
              <strong>Current order</strong>
              <span>{totals.totalItems} items from The Cafe Table</span>
            </div>
            <strong>₹{totals.totalPrice}</strong>
          </div>
          <p className="panel-note">Your table order is ready to review. Add or remove dishes from the menu.</p>
          <button className="panel-action" type="button" onClick={() => handleNavigation("menu")}>
            Browse menu <ChevronRight size={22} />
          </button>
        </section>
      ) : activeSection === "profile" ? (
        <section className="account-panel">
          <span className="panel-kicker">The Cafe Table</span>
          <h1>Profile</h1>
          <div className="profile-card">
            <div className="profile-avatar">R</div>
            <div>
              <strong>Guest table</strong>
              <span>Scan menu access</span>
            </div>
          </div>
          <button className="panel-action" type="button" onClick={() => handleNavigation("orders")}>
            View your orders <ChevronRight size={22} />
          </button>
        </section>
      ) : (
        <>
          {activeSection === "home" && <Hero restaurant={data.restaurant} searchQuery={searchQuery} onSearch={setSearchQuery} />}
          {activeSection === "home" && (
            <CategoryTabs
              dietaryFilters={data.dietaryFilters}
              activeDiet={activeDiet}
              onDietChange={setActiveDiet}
            />
          )}

          <section className="popular-section">
            <div className="section-title">
              <h2>{activeSection === "menu" ? "Full cafe menu" : "Choose your table favourites"}</h2>
            </div>
            <div className="menu-grid">
              {visibleItems.map((item) => (
                <MenuCard
                  item={item}
                  key={item.id}
                />
              ))}
            </div>
          </section>
        </>
      )}

      <CartBar totalItems={totals.totalItems} totalPrice={totals.totalPrice} />
    </main>
  );
}
