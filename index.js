import React from "react";
import Reactdom from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const rootElement = document.getElementById("root");
const root = Reactdom.createRoot(rootElement);

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Layout />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
