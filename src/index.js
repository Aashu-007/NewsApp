import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
  <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      {/*basename="/ANN-News"*/}
      <App />
    </BrowserRouter>
  </ThemeProvider>
  </>
);
