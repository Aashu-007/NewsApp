import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";
import CategoryPage from "./Pages/CategoryPage";
import { Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			{/*<Homepage/>*/}
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/category" component={CategoryPage} />
			</Switch>
		</>
	);
};

export default App;
