import React from "react";
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import InfoBanner from "./components/InfoBanner";
import './styles.css'

import Header from "./components/Header.jsx";
import Login from "./components/login.jsx";
import CaptainDashboard from "./CaptainDashboard.jsx";
import NavbarBottom from "./components/NavbarBottom.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <InfoBanner />
    <Header />
    <Routes>
    <Route path="/login.html" element={<Login />} />
    <Route path="/dashboard.html"
    element={<CaptainDashboard user_name="Karl Jensen" />} />
</Routes>
    <NavbarBottom />
    </BrowserRouter>
  </React.StrictMode>,
)

