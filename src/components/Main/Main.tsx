import * as React from "react";
import { observer } from 'mobx-react';
let CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

import Header from '../Header/Header';
import Chips from '../Chips/Chips';
import Grid from '../Grid/Grid';

import store from '../../store/Store';

@observer class Main extends React.Component<any, any>{

	constructor(props) {
		super(props);
		require('./Main.scss');
	}

	render() {
		return (
			<div className="main">
				<Header store={store} />
				<CSSTransitionGroup
					transitionName="chips-animate"
					transitionEnterTimeout={350}
					transitionLeaveTimeout={350}>
					{ store.currentCategory != null && <Chips store={store} /> }
				</CSSTransitionGroup>
				<Grid store={store} />
			</div>
		)
	}
}

export default Main;