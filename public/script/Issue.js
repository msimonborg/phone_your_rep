import React from 'react';
import networkMap from './constants';

export default class Issue extends React.Component {

    render() {

        return (
            <div className="radio">
                <label><input type="checkbox" id="number" data-issue={this.props.issue} onChange={this.props.handleChange.bind(this)}/> {this.props.issue}</label>
            </div>
        )

    }
}
