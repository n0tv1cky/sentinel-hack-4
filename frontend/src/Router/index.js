import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import MacBookPro141 from '../Components/MacBookPro141';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/macbookpro141"><MacBookPro141 /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;