import * as React from "react";
import { observer } from 'mobx-react';

@observer class Card extends React.Component<any, any>{

	constructor(props) {
		super(props);
		require('./Card.scss');
	}

	render() {
		let { image } = this.props.item;

		return (
			<div className="card" key={image}>
				<img src={'/src/images/' + image} />
			</div>
		);
	}
}

export default Card;