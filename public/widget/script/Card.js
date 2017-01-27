import React from 'react';
import Office from './Office';
import Name from './Name.js'
// Card component
export default class Card extends React.Component {
    render() {
        var contact = this.props.contacts;
        var party = this.props.contact.party.charAt(0);
		var office = (this.props.contact.role === "United States Senator") ? "Senator " : "Represenative ";
		var closest_office = this.props.contact.office_locations[0];
		console.log(this.props.contact.office_locations);

        return (
			<div className={"col-12 center "}>
				<div className="card row">
					<div className="col-12">
						<Name party={party} name={this.props.contact.official_full} office={office}></Name>
						<Office office={closest_office} ></Office>
					</div>

				</div>
			</div>
        );
    }
};
