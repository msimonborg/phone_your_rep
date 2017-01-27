import React from 'react';

export default class Name extends React.Component {

	render() {
		return (
			<div className="card-name">
				<h3 className="card-member">
					{this.props.office + this.props.name + " - (" + this.props.party + ")"}
				</h3>
			</div>
		);
  	}
};
