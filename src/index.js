import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Authentif from "./components/auth/auth";
import Home from "./components/home/home";
import NoPage from "./components/nopage/nopage";
import PrivateRoutes from "./utilities/PrivateRoutes";
import { AuthProvider } from "./utilities/UseAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<Authentif />} />
        <Route path="/auth" element={<Authentif />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
