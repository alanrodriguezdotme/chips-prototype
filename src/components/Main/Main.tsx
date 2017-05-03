import * as React from "react";
import { observer } from 'mobx-react';

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
		console.log(store.query, store.currentCategory);
		return (
			<div className="main">
				<Header store={store} />
				{ store.currentCategory != null && <Chips store={store} /> }
				<Grid store={store} />
			</div>
		)
	}
}

export default Main;