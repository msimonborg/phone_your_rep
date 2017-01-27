import React from 'react';
import Issue from './Issue';
import './apiInfo';

export default class ReportIssue extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			issues: [],
			selected: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.submitReport = this.submitReport.bind(this);
		this.getIssues = this.getIssues.bind(this);
		this.displayButton = this.displayButton.bind(this);
		this.resetIssues = this.resetIssues.bind(this);

	}



	getIssues(){
		var url = apiUrl + "api/beta/issues/new"
		var capId = 'recaptcha' + this.props.officeCardId
		fetch(url).then(response => response.json().then(data => this.setState({issues: data.issue_categories})))
		grecaptcha.render(capId, {
					'sitekey' : '6LeP8hIUAAAAAA0_otB8Q8p2QP1qAptDbEdiNnTL',
					'callback' : this.displayButton
				});
		// this.setState({issues:['Incorrect phone number', 'Office location moved', 'Trouble downloading v-card', 'Incorrect Email']})
	}

	displayButton(){
		let buttonEl = document.getElementById("submit-report" + this.props.officeCardId)
		let captchaEl = document.getElementById('recaptcha' + this.props.officeCardId)
		captchaEl.style.display = "none"
		buttonEl.style.display = "block"
	}

	handleChange(e){
		let indexOfTarget = this.state.selected.indexOf(e.target.getAttribute("data-issue"))
		let issue = e.target.getAttribute("data-issue")

		if (e.target.checked && indexOfTarget == -1) {
			this.setState({selected: this.state.selected.concat([issue])})
		}
		else if (!e.target.checked && indexOfTarget != -1){
			var newSelected = this.state.selected.slice();
			newSelected.splice(indexOfTarget, 1);
			this.setState({selected: newSelected})
		}
	}

	submitReport(){
		if(this.state.selected.length == 0) {
			console.log("It looks like there's no issue for you to send us!");
		}
		else{
			var issueSubmission = {
				issue: {
					issue_type: this.state.selected,
					office_location_id: this.props.officeId
				}
			}
			var url = apiUrl + "api/beta/issues"
			$.post(url,issueSubmission);
		}
		this.resetIssues();
	}

	resetIssues(){
		let buttonEl = document.getElementById("submit-report" + this.props.officeCardId)
		let captchaEl = document.getElementById('recaptcha' + this.props.officeCardId)
		this.setState({selected: [], issues:[]})
		captchaEl.innerHTML = ""
		captchaEl.style.display = "block"
		buttonEl.style.display = "none"
		grecaptcha.reset()
	}

	render() {
		return(
			<div>
				<i type="button" className="fa fa-exclamation-triangle" data-toggle="modal" onClick={this.getIssues} data-target={"#reportIssue" + this.props.officeCardId}></i>
				<div className="modal fade" id={"reportIssue" + this.props.officeCardId} role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal">&times;</button>
								<h4 className="modal-title">Report an issue</h4>
								<div className="modal-body">
									<p>Which information is wrong?</p>
									{this.state.issues.map((issue,i) => {
										return(
											<Issue key={i} issue={issue} handleChange={this.handleChange}/>
										);
									})
									}


									<div className="modal-footer">
										<div id={'recaptcha' + this.props.officeCardId}></div>
										<input type="submit" id={"submit-report" + this.props.officeCardId} className="btn btn-default submit-report" value="Send" onClick={this.submitReport} data-dismiss="modal"/>
									</div>
								</div>
							</div>
			   		</div>
					</div>
				</div>
			</div>

		)
	}
}
