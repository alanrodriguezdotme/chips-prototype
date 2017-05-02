import * as React from "react";
import { observer } from 'mobx-react';

import Header from '../Header/Header';
import Grid from '../Grid/Grid';

@observer class Main extends React.Component<any, any>{

	constructor(props) {
		super(props);
		require('./Main.scss');
	}

	render() {
		return (
			<div className="main">
				<Header />
				<Grid />
			</div>
		)
	}
}

export default Main;