import * as React from "react";
import { observer } from 'mobx-react';

import Card from './Card';
import store from '../../store/Store';
let data = require('../../store/data.json');

@observer class Grid extends React.Component<any, any>{

	constructor(props) {
		super(props);
		require('./Grid.scss');
	}

	renderResults() {
		let { query } = store;

		if ( query == null ) {
			return data.map((item) => {
				return <Card item={item} />
			});
		} 
	}

	render() {
		return (
			<div className="grid">
				{ this.renderResults() }
			</div>
		)
	}
}

export default Grid;