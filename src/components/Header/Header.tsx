import * as React from "react";
import { observer } from 'mobx-react';

// import store from '../../store/Store';
let data = require('../../store/data.json');

@observer class Header extends React.Component<any, any>{

	constructor(props) {
		super(props);
		require('./Header.scss');
	}

	checkCategory(value) {
		let categories = [
			"cars",
			"automobiles",
			"vehicles",
			"sneakers",
			"shoes"
		];

		for (let i = 0; i < categories.length; i++) {
			if (value == categories[i]) {
				this.props.store.currentCategory = categories[i];
				break;
			} else {
				this.props.store.currentCategory = null;
			}
		}
	}

	updateResults(value) {
		let results = [];
		
			data.map((item, index) => {
				let brand = item.brand.toLowerCase();
				let model = item.model.toLowerCase();
				let color = item.color.toLowerCase();
				let type = item.type.toLowerCase();
				let { currentCategory, chips } = this.props.store;

				if (value.length == 0) {
					results.push(item);
				}

				item.categories.forEach((category) => {
					if (category.indexOf(value) > -1) {
						results.push(item);
					}
				});
				
				if (
					brand.indexOf(value) > -1 ||
					model.indexOf(value) > -1 ||
					color.indexOf(value) > -1 ||
					type.indexOf(value) > -1
					) {
					results.push(item);
				}

				// if (isCategory) { // determine if search query might contain a category
				// 	if (currentCategory == null) { return card; } // if no current category, just show card

				// 	let activeChips = [];
				// 	chips.forEach((chip, index) => {
				// 		if (chip.active) { activeChips.push(chip.filter); }
				// 	});

				// 	if (activeChips.length == 0) { return card; }

				// 	let activeFilters;
				// 	activeChips.forEach((filter, index) => { // get all active chip filters and string them together
				// 		if (index != 0) {
				// 			activeFilters += " && " + filter;
				// 		} else {
				// 			activeFilters = filter;
				// 		}
				// 	});

				// 	if (eval(activeFilters)) { // return any cards that come up as true
				// 		return card;
				// 	}

				// // is there a better way to do this?
				// } else 
			});

		this.props.store.results = results;

	}

	onSearchChange(event) {
		let { value } = event.target;
		this.props.store.query = value;
		this.checkCategory(value);
		this.updateResults(value);
	}

	render() {
		return (
			<header className="header">
				<input className="header-search" ref="query" type="text" placeholder="Search..." onChange={this.onSearchChange.bind(this)} />
			</header>
		);
	}
}

export default Header;