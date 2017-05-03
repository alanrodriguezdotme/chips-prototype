import * as React from "react";
import { observer } from 'mobx-react';

import Chip from './Chip';
import store from '../../store/Store';

@observer class Chips extends React.Component<any, any>{
	constructor(props) {
		super(props);
		require('./Chips.scss');
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
				<div className="chips-current">{this.renderCurrentChips()}</div>
				<div className="chips-active">{this.renderActiveChips()}</div>
			</div>
		);
	}
}

export default Chips;