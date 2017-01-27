import React from 'react';
import networkMap from './constants';


export default class SocialLink extends React.Component {

	render() {
		if(!this.errored){
			return (<img className="card-photo" src={this.props.link}/>)
		}
		else{
			return (<img className="card-photo" src="./person.png"/>)
		}
  	}
};
