import * as React from "react";
import { observer } from 'mobx-react';
let classNames = require('classnames');

import Card from './Card';
import store from '../../store/Store';
let data = require('../../store/data.json');

@observer class Grid extends React.Component<any, any>{

	constructor(props) {
		super(props);
		require('./Grid.scss');

		this.state = {
			activeChipsShowing: false
		}
	}

	renderResults() {
		let { results } = this.props.store;
		if (results != null) {
			return results.map((result, index) => {
				return <Card item={result} key={'card_' + index} />
			});
		}
	}

	render() {
		let gridClasses = classNames({
			'grid': true,
			'chips-showing': this.props.store.currentCategory != null,
			'active-chips-showing': this.props.store.activeChipsShowing
		})

		return (
			<div className={gridClasses}>
				{ this.renderResults() }
			</div>
		)
	}
}

export default Grid;