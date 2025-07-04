import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import { Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import Formulaire from "./component/Formulaire";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route  path="/" element={<App />} />
      <Route path="/formulaire" element={<Formulaire />} />
      
    </Routes>
  </BrowserRouter>
);
