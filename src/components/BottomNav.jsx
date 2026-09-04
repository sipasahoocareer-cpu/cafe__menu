import React from "react";
import { ClipboardList, Home, Menu as MenuIcon, UserRound } from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, active: true },
  { label: "Menu", icon: MenuIcon },
  { label: "Orders", icon: ClipboardList },
  { label: "Profile", icon: UserRound }
];

export default function BottomNav({ activeSection, onChange }) {
  return (
    <nav className="bottom-nav" aria-label="Primary navigation">
      {navItems.map(({ label, icon: Icon }) => (
        <button
          className={activeSection === label.toLowerCase() ? "active" : ""}
          key={label}
          type="button"
          onClick={() => onChange(label.toLowerCase())}
        >
          <Icon size={34} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
