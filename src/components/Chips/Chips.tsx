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

	checkCategory(value) {
		let validCategories = [
			"cars",
			"automobiles",
			"vehicles",
			"sneakers",
			"shoes"
		];

		for (let i = 0; i < validCategories.length; i++) {
			if (value.toLowerCase() == validCategories[i]) {
				this.props.store.currentCategory = validCategories[i];
				let updatedResults = this.props.store.results.filter((result) => {
					let { categories } = result;

					for (let i=0; i < categories.length; i++) {
						if (categories[i] == validCategories) {
							return result;
						}
					}
				});

				this.props.store.results = updatedResults;
				break;
			} else {
				this.props.store.currentCategory = null;
				this.props.store.activeChipsShowing = false;
			}
		}
	}

	filterResults() {
		let { chips, results, currentCategory } = this.props.store;
		let categoryResults = data.filter((item) => {
			let { categories } = item;

			for (let i=0; i < categories.length; i++) {
				if (categories[i] == currentCategory) {
					return item;
				}
			}
		});
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
			
			categoryResults.forEach((item) => {
				if (eval(activeFilters)) {
					filteredResults.push(item);
				}
			});

			if (filteredResults.length == 0) {
				this.props.store.results = null;
			}

			this.props.store.results = filteredResults;

		} else {
			if (currentCategory == null) {
				this.props.store.results = data;
			} else {
				this.props.store.results = categoryResults;
			}

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