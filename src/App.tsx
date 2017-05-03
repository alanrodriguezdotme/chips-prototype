import * as React from "react";
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Main from './components/Main/Main';

render(
	(
		<Router history={browserHistory}>
			<Route path="/" component={Main}/>
		</Router>
	),
	document.getElementById("app")
);