import * as React from "react";
import { observer } from 'mobx-react';
let classNames = require('classnames');
let CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

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
		if (results == null || results.length == 0) {
			return (
				<div className="grid-empty">
					Sorry, nothing to see here.<br />Try changing your search or removing some filters.
				</div>
			)
		} else {
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
				<CSSTransitionGroup
					transitionName="chips-animate"
					transitionAppear={true}
					transitionAppearTimeout={350}
					transitionEnterTimeout={350}
					transitionLeaveTimeout={350}>
					{ this.renderResults() }
				</CSSTransitionGroup>
			</div>
		)
	}
}

export default Grid;