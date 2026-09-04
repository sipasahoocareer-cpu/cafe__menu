import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.jsx";
import QrGate from "./components/QrGate.jsx";
import "./styles.css";

const isMenuRoute = window.location.pathname === "/menu";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isMenuRoute ? <App /> : <QrGate />}
    <Analytics />
  </React.StrictMode>
);
