// ========================================
// ENTRY POINT - main.jsx
// ========================================
// Dette er indgangspunktet til React applikationen
// Her initialiseres React og applikationen mountes til DOM

// Importerer React biblioteket
import React from "react";
// Importerer ReactDOM til at rendere React komponenter til DOM
import ReactDOM from "react-dom/client";
// Importerer BrowserRouter fra React Router til at håndtere navigation
import { BrowserRouter } from "react-router";
// Importerer hovedkomponenten App
import App from "./App";
// Importerer globale CSS styles
import "./index.css";

// ========================================
// REACT APP INITIALISERING
// ========================================

// Opretter en React root ved at finde HTML elementet med id "root"
// Dette element findes i index.html filen
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderer App komponenten til DOM
// BrowserRouter wrapper App komponenten for at give routing funktionalitet
root.render(
  <BrowserRouter>
    {/* BrowserRouter giver alle child komponenter adgang til routing funktionalitet */}
    <App />
  </BrowserRouter>
);

// ========================================
// FORKLARING AF STRUKTUREN:
// ========================================
// 1. ReactDOM.createRoot() - Opretter en React root container
// 2. document.getElementById("root") - Finder HTML elementet hvor React skal mountes
// 3. BrowserRouter - Giver routing funktionalitet til hele applikationen
// 4. App - Hovedkomponenten der indeholder al applikations logik
// 5. root.render() - Mountes React applikationen til DOM
