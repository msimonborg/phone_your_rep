import React from 'react';

export default class OfficeList extends React.Component {
    constructor() {
        super();
        this.state = {
            toggleOfficeId: null
        }
		/* this.togglePanel = this.togglePanel.bind(this); */
    }

    togglePanel(officeId) {
		if (this.state.toggleOfficeId == officeId){
			this.setState({toggleOfficeId: null})
		}else{
	        this.setState({toggleOfficeId: officeId})
		}

    }

    render() {

		var offices = this.props.offices.map((office, i) => {
			return (<Office key={i} office={office} officeId={i} togglePanel={this.togglePanel.bind(this)} toggleOfficeId={this.state.toggleOfficeId}/>)
		})
		return (<div className="card-office-list">{offices}</div>);
    }
};

class Office extends React.Component {
    render() {
		var office = this.props.office.city;
		var tel_link = "tel:" + this.props.office.phone;
		var address = (this.props.office.address ? this.props.office.address : "" ) + (this.props.office.suit ? this.props.office.suit : "");
		var city = (this.props.office.city ? this.props.office.city + ", " : "") + this.props.office.state + ", " + this.props.office.zip;
		var building = (this.props.office.building ? this.props.office.building + ", " : "");

		var togglePanel = this.props.togglePanel;
		var officeId = this.props.officeId;
		var isHidden = (this.props.toggleOfficeId == officeId) ? "" : "hidden";
		var caret = (this.props.toggleOfficeId == officeId) ? "fa fa-caret-down fa-white card-office-btn-caret" :  "fa fa-caret-up fa-white card-office-btn-caret"

        return (
            <div className="card-office">
				<div className="card-office-btn" onClick={function(e){
					togglePanel(officeId);
				}}>
					<div className="card-office-btn-office">
						<i className={caret} aria-hidden="true"></i>
						<h1 className="card-office-btn-name font-white">{office}</h1>
					</div>
					<div className="card-office-btn-link">
						<a className="font-white" href={this.props.office.v_card_link}>
							<i className="fa fa-arrow-circle-o-down fa-white" aria-hidden="true"></i>
							{" Download contact"}
						</a>
					</div>
				    <div className="spacer"></div>
                </div>

                <div className={"card-office-panel row " + isHidden}>
					<div className="col-6 card-office-panel-phone">
						<i className="fa fa-phone-square fa-icon fa-fw " aria-hidden="true"></i>
						<p>
							<a href={tel_link}>{this.props.office.phone}</a>
						</p>
					</div>

					<div className="col-6 card-office-panel-office ">
						<i className="fa fa-building fa-icon fa-fw " aria-hidden="true"></i>
						<p>{building}</p>
						<p>{address}</p>
						<p>{city}</p>
					</div>
                </div>
			    <div className="spacer"></div>
            </div>
        )
    }
};
