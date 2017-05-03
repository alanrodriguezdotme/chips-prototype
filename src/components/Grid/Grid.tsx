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
	}

	renderResults() {
		let { query } = this.props.store;

		if ( query.length == 0 ) { // check if searching for anything
			return data.map((item, index) => {
				return <Card item={item} key={index} />
			});

		} else {
			return data.map((item, index) => {
				let card = <Card item={item} key={index} />
				let brand = item.brand.toLowerCase();
				let model = item.model.toLowerCase();
				let { currentCategory, chips } = store;
				let isCategory;

				item.categories.forEach((category) => {
					if (category.indexOf(query) > -1) {
						isCategory = true;
					}
				});

				if (isCategory) { // determine if search query might contain a category
					if (currentCategory == null) { return card; } // if no current category, just show card

					let activeChips = [];
					chips.forEach((chip, index) => {
						if (chip.active) { activeChips.push(chip.filter); }
					});

					if (activeChips.length == 0) { return card; }

					let activeFilters;
					activeChips.map((filter, index) => { // get all active chip filters and string them together
						if (index != 0) {
							activeFilters += " && " + filter;
						} else {
							activeFilters = filter;
						}
					});

					if (eval(activeFilters)) { // return any cards that come up as true
						return card;
					}

				} else if(brand.indexOf(query) > -1) {
					return card;
				} else if(model.toLowerCase().indexOf(query) > -1) {
					return card;
				}
			});
		}
	}

	render() {
		let gridClasses = classNames({
			'grid': true,
			'chips-showing': this.props.store.currentCategory != null
		})

		return (
			<div className={gridClasses}>
				{ this.renderResults() }
			</div>
		)
	}
}

export default Grid;