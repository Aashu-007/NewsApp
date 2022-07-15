import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Appbar from "./components/Appbar.js";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <BrowserRouter>
      <Appbar />
      {/*basename="/ANN-News"*/}
      <App />
    </BrowserRouter>
  </>
);
