import * as React from "react";
import { observer } from 'mobx-react';

import store from '../../store/Store';

@observer class Chip extends React.Component<any, any>{

	handleClick() {		
		this.props.chip.active = !this.props.chip.active;
	}

	render() {
		let { label, active } = this.props.chip;

		return (
			<div className="chip" onClick={() => this.handleClick()}>
				{ active ? <span>X</span> : null }
				<label>{label}</label>
			</div>
		);
	}
}

export default Chip;