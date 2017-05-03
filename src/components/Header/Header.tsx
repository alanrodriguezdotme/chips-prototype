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

	onSearchChange(event) {
		let { value } = event.target;
		this.props.store.query = value;
		this.checkCategory(value);
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