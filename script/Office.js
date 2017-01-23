import React from 'react';
import ReportIssue from './ReportIssue';

export default class Office extends React.Component {
	constructor(){
		super();
		this.state = {
				showChildren: false
		}
	}


	showQR(e){

		document.getElementById('qr_code_box').innerHTML = `<a href=${this.props.office.qr_code_link}><img src=${this.props.office.qr_code_link} /></a>`
		// e.target.nextElementSibling.style.display = 'block'
		// var meRect = e.target.getBoundingClientRect()
		// var qrRect = e.target.nextElementSibling.getBoundingClientRect()
		// var doc = document.documentElement;
		// var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0)
		// var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
		// var boxPos = {};
		//
		// boxPos.left = (e.pageX - left - qrRect.width);
    // boxPos.top = (e.pageY - top - qrRect.height);
		//
		// e.target.nextElementSibling.style.left = boxPos.left + "px"
		// e.target.nextElementSibling.style.top = boxPos.top + "px"
		}

	leaveQR(e){
		$('#qr_code_box').empty();
		// e.target.nextElementSibling.style.display = 'none'
  }


	toggleInfo(){
    this.setState({showChildren: !this.state.showChildren})
	}
	render() {
		let chevronClass = "fa fa-chevron-down"
		var officeType = this.props.office.city.charAt(0).toUpperCase() + this.props.office.city.slice(1)
		var officeInfoId = "office-info" + this.props.officeId + this.props.cardId
		var telHref = "tel:" + this.props.office.phone
		var address = (this.props.office.address ? this.props.office.address : "" ) + (this.props.office.suit ? this.props.office.suit : "")
		var city = (this.props.office.city ? this.props.office.city + ", " : "") + this.props.office.state + ", " + this.props.office.zip;
		var building = (this.props.office.building ? this.props.office.building + ", " : "")
		return(
			<div className="office ">
				<div className="office-header row">
					<span className="col-xs-2">
						<a data-toggle="collapse" data-target={"#"+officeInfoId} onClick={this.toggleInfo.bind(this)}>
						{this.state.showChildren ?
								<i className="fa fa-chevron-up officeIcons" aria-hidden="true"></i>
							: <i className="fa fa-chevron-down officeIcons" aria-hidden="true"></i>
						}
						</a>
					</span>
					<span className="col-xs-8 text-center"><h5>{officeType} Office - <a href={telHref}>{this.props.office.phone}</a></h5></span>
					<div className="qr-box col-xs-2" id="qr_code_box"></div>
					<span className="col-xs-2">
						<span className="pull-right card-link">{this.props.office.distance}mi</span>
						<a className="pull-right card-link myAddressCard" href={this.props.office.v_card_link}>
							<i className="fa fa-address-card officeIcons"></i>
						</a>
						<div className="pull-right card-link QRcode">
							<a href={this.props.office.qr_code_link}><i onMouseOver={this.showQR.bind(this)} onMouseLeave={this.leaveQR.bind(this)} className="fa fa-qrcode"></i></a>
						</div>
					</span>
				</div>
				<div id={officeInfoId} className="collapse">
				<div className="row">
					<div className="col-sm-4">
						Address:
					</div>
					<div className="col-sm-8">
						<p>{building}</p>
						<p>{address}</p>
						<p>{city}</p>
					</div>
				</div>
				{this.props.office.fax ?
				<div className="row">
					<div className="col-sm-4">
						Fax:
					</div>
					<div className="col-sm-8">
						 <p>{this.props.office.fax}</p>
					</div>
				</div>
				: null
				}
					<ReportIssue
						officeId={this.props.office.office_id}
						officeCardId={this.props.officeId.toString() + this.props.cardId.toString()}
					/>
				</div>
			</div>
		)
	}
};
