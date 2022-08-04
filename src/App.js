import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CategoryPage from "./Pages/CategoryPage";
import { Switch, Route } from "react-router-dom";
import Appbar from "./components/Appbar.js";

import alanBtn from "@alan-ai/alan-sdk-web";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: "17443b896f405a15aabba874dbf9b37e2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
          // Call the client code that will react to the received command
        }
      },
    });
  }, []);
  return (
    <>
      <Appbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/category" component={CategoryPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
};

export default App;
