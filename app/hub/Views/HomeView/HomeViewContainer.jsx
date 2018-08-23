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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HomeView from './HomeView';
import * as actions from './HomeViewActions';

/**
 * @class Implement the Tutorial View Container for the Ghostery Hub
 * @extends Component
 * @memberof HubContainers
 */
class HomeViewContainer extends React.Component {
	/**
	 * Lifecycle Event
	 */
	componentWillMount() {
		const title = t('hub_home_page_title');
		window.document.title = title;
	}

	/**
	 * React's required render function. Returns JSX
	 * @return {JSX} JSX for rendering the Tutorial View of the Hub app
	 */
	render() {
		return <HomeView />;
	}
}

/**
 * Map redux store state properties to the component's own properties.
 * @param  {Object} state    entire Redux store's state
 * @return {function}        this function returns a plain object, which will be merged into the component's props
 * @memberof HubContainers
 */
const mapStateToProps = () => Object.assign({});

/**
 * Bind the component's action creators using Redux's bindActionCreators.
 * @param  {function} dispatch redux store method which dispatches actions
 * @return {function}          to be used as an argument in redux connect call
 * @memberof SetupContainers
 */
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Object.assign(actions), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeViewContainer);
