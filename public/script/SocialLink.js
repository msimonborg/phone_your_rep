import React from 'react';
import networkMap from './constants';

export default class SocialLink extends React.Component {
    render() {

        function _socialLink(link, network) {;
            var classes = 'fa fa-icon ' + network.className;
            var url = network.baseUrl + link;
            return (
                <a className="card-link" href={url} target="_blank">
                    <i className={classes} aria-hidden="true"></i>
                </a>
            );
        }

        if (this.props.link) {
            return _socialLink(this.props.link, networkMap[this.props.type]);
        }

        return null;
    }
};

SocialLink.propTypes = {
    type: React.PropTypes.oneOf(Object.keys(networkMap)).isRequired
};
