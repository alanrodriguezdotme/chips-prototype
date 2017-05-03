import * as React from "react";
import { observer } from 'mobx-react';

@observer class Card extends React.Component<any, any>{

	constructor(props) {
		super(props);
		require('./Card.scss');
	}

	render() {
		let { image } = this.props.item;
		let cardStyle = {
			backgroundImage: 'url(/src/images/' + image + ')'
		}

		return (
			<div className="card" style={cardStyle}></div>
		);
	}
}

export default Card;