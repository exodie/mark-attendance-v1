// lib
import React from "react";
import ReactDOM from "react-dom/client";

// main file
import Application from "./App";

// styles
import "./app.scss";
import "antd/dist/antd";
import { App } from "antd";

// navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import { Admin } from "./components/admin/Admin.component";
import { AllSectionComponent } from "./components/AllSection.component";

// store
import { StoreProvider } from "./store/providers/store.provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App>
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Application />} />
            <Route path="/table/:id" element={<AllSectionComponent />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </App>
  </React.StrictMode>
);
