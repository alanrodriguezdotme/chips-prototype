import * as React from "react";
import { observer } from 'mobx-react';

@observer class Header extends React.Component<any, any>{

	constructor(props) {
		super(props);
		require('./Header.scss');
	}

	render() {
		return (
			<header className="header">
				<input className="header-search" placeholder="Search for a car" />
			</header>
		);
	}
}

export default Header;