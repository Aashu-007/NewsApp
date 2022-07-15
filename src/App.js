import React,{useState} from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CategoryPage from "./Pages/CategoryPage";
import { Switch, Route } from "react-router-dom";
import Appbar from "./components/Appbar.js";

const App = () => {
	
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
