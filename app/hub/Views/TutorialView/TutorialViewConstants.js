/**
 * Tutorial View Constants
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

<<<<<<< HEAD:app/hub/Views/TutorialView/TutorialViewConstants.js
// Tutorial View
export const INIT_TUTORIAL_PROPS = 'INIT_TUTORIAL_PROPS';
=======
import { combineReducers } from 'redux';
import { reducer as setup } from '../Views/SetupView';
import { reducer as tutorial } from '../Views/TutorialView';

const Reducers = combineReducers({
	setup,
	tutorial,
});

export default Reducers;
>>>>>>> d9427ab... hub tutorial navigation:app/hub/reducers/index.js
