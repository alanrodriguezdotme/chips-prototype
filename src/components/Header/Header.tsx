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

	updateResults(query) {
		let results = [];
		let value = query.toLowerCase();
		
		if (value.length == 0) {
			this.props.store.results = data;
		} else {
			results = data.filter((item, index) => {
				let brand = item.brand.toLowerCase();
				let model = item.model.toLowerCase();
				let color = item.color.toLowerCase();
				let type = item.type.toLowerCase();
				let { chips } = this.props.store;

				if (
					brand.indexOf(value) > -1 ||
					model.indexOf(value) > -1 ||
					color.indexOf(value) > -1 ||
					type.indexOf(value) > -1
				) {
					return item;
				}

				for (let i = 0; i < item.categories.length; i++) {
					if (item.categories[i].indexOf(value) > -1) {
						return item;
					}
				}

			});

			this.props.store.results = results;
		}

	}

	onSearchChange(event) {
		let { value } = event.target;
		this.props.store.query = value;
		this.checkCategory(value);
		this.updateResults(value);
	}

	handleKeyPress(event) {
		if (event.key == 'Enter') {
			console.log(this.props.store.query);
			this.updateResults(this.props.store.query);
		}
	}

	render() {
		return (
			<header className="header">
				<input className="header-search" ref="query" type="text" placeholder="Search..." onChange={this.onSearchChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} />
			</header>
		);
	}
}

export default Header;