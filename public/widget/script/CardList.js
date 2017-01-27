import React from 'react';
import Card from './Card';

export default class CardList extends React.Component {
	render() {
		const cards = this.props.data.map((contact,i ) => {
			return (
				<Card
					key={i}
					contact={contact}
					cardId={i}
				/>
			);
		});
		return (
			<div className="row card-list">
				{cards}
			</div>
		);
	}
}
