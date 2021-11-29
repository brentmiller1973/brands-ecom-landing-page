import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
// import App from "./App";
import LandingPageLayout from "./components/LandingPageLayout";
import ProductDetailPageLayout from "./components/ProductDetailPageLayout";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPageLayout />} />
      <Route path="/brands-ecom-landing-page" element={<LandingPageLayout />} />
      <Route
        path="/brands-ecom-product-detail-page"
        element={<ProductDetailPageLayout />}
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
