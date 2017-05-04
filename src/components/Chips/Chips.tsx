import * as React from "react";
import { observer } from 'mobx-react';
let CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

import Chip from './Chip';
import store from '../../store/Store';
let data = require('../../store/data.json');

@observer class Chips extends React.Component<any, any>{
	constructor(props) {
		super(props);
		require('./Chips.scss');
	}

	componentDidUpdate() {
		this.filterResults();
	}

	filterResults() {
		let { chips, results } = this.props.store;
		let activeChips = [];
		let activeFilters;
		let filteredResults = [];

		chips.forEach((chip) => {
			if (chip.active) {
				activeChips.push(chip);
				this.props.store.activeChipsShowing = true;
			}
		});

		if (activeChips.length > 0) {
			activeChips.forEach((chip, index) => {
				if (index == 0) {
					activeFilters = chip.filter;
				} else {
					activeFilters += ' && ' + chip.filter;
				}
			});
			
			data.forEach((item) => {
				if (eval(activeFilters)) {
					filteredResults.push(item);
				}
			});

			if (filteredResults.length == 0) {
				this.props.store.results = null;
			}

			this.props.store.results = filteredResults;

		} else {
			this.props.store.results = data;
			this.props.store.activeChipsShowing = false;
		}
	}

	renderCurrentChips() {
		let { chips } = store;
		return chips.map((chip, index) => {
			if (!chip.active) {
				return <Chip chip={chip} key={'chip_' + index}  />;
			}
		});
	}

	renderActiveChips() {
		let { chips } = store;
		return chips.map((chip, index) => {
			if (chip.active) {
				return <Chip chip={chip} key={'chip_active_' + index} />;
			}
		});
	}

	render() {
		return (
			<div className="chips">
				<div className="chips-current">
					<CSSTransitionGroup
						transitionName="chip-animate"
						transitionEnterTimeout={350}
						transitionLeaveTimeout={350}>
						{this.renderCurrentChips()}
					</CSSTransitionGroup>
				</div>
				<div className="chips-active" key="1">
					<CSSTransitionGroup
						transitionName="chip-animate"
						transitionAppear={true}
						transitionAppearTimeout={350}
						transitionEnterTimeout={350}
						transitionLeaveTimeout={350}>
						{this.renderActiveChips()}
					</CSSTransitionGroup>
				</div>
			</div>
		);
	}
}

export default Chips;