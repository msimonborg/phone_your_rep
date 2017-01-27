import React from 'react';

export default class Office extends React.Component {

	render() {
		return (
			<div className="card-office">
				<a className="font-white" href={this.props.office.v_card_link}>
					<i className="fa fa-arrow-circle-o-down fa-white" aria-hidden="true"></i>
					{" Download contact"}
				</a>
			</div>
		);
  	}
};
