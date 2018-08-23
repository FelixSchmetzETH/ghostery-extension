/**
 * Tutorial View Container
 *
 * Ghostery Browser Extension
 * https://www.ghostery.com/
 *
 * Copyright 2018 Ghostery, Inc. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0
 */

import React from 'react';
import PropTypes from 'prop-types';
import HomeView from './HomeView';

/**
 * @class Implement the Home View Container for the Ghostery Hub
 * @extends Component
 * @memberof HubContainers
 */
class HomeViewContainer extends React.Component {
	constructor(props) {
		super(props);

		const title = t('hub_home_page_title');
		window.document.title = title;
	}

	/**
	 * React's required render function. Returns JSX
	 * @return {JSX} JSX for rendering the Home View of the Hub app
	 */
	render() {
		return <HomeView humanWebEnabled={this.props.home.enable_human_web} />;
	}
}

// PropTypes ensure we pass required props of the correct type
// Note: isRequired is not needed when a prop has a default value
HomeViewContainer.propTypes = {
	home: PropTypes.shape({
		enable_human_web: PropTypes.bool,
	}),
};

// Default props used throughout the Setup flow
HomeViewContainer.defaultProps = {
	home: {
		enable_human_web: false,
	},
};

export default HomeViewContainer;
