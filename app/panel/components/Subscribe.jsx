/**
 * About Component
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
import { Link } from 'react-router-dom';
/**
 * Render Subscribe panel.
 * @return {ReactComponent}   ReactComponent instance
 */
function Subscribe(props) {
	// supporter param is specified in Route path to this component
	const supporter = (props.match.params.supporter === 'true');
	return (
		<div className="content-subscription">
			<svg width="137px" height="97px" viewBox="0 0 137 97" className="badge">
				<defs>
					<linearGradient x1="80.3571429%" y1="19.8177083%" x2="35.8398438%" y2="91.4973958%" id="linearGradient-1">
						<stop stopColor="#ECD868" offset="0%" />
						<stop stopColor="#D4AF37" offset="100%" />
					</linearGradient>
					<linearGradient x1="78.9156351%" y1="17.5539773%" x2="78.9156377%" y2="79.4449574%" id="linearGradient-2">
						<stop stopColor="#ECD868" offset="0%" />
						<stop stopColor="#D4AF37" offset="100%" />
					</linearGradient>
					<linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="linearGradient-3">
						<stop stopColor="#ECD868" offset="0%" />
						<stop stopColor="#D4AF37" offset="100%" />
					</linearGradient>
				</defs>
				<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g transform="translate(-224.000000, -85.000000)">
						<g transform="translate(224.000000, 85.000000)">
							<g fillRule="nonzero">
								<path d="M137,24.2616926 L110.012522,24.2616926 C109.7507,22.3522413 109.219444,20.4726498 108.056467,18.8240783 C105.919267,15.7925297 102.453167,14.5714238 99.3935,13.4949019 C97.5516111,12.8474172 95.8132333,12.2345069 94.6411222,11.3544306 C93.4948889,10.493213 92.4095444,8.98922546 91.2587444,7.39723027 C89.3148667,4.70356812 87.1122111,1.65158919 83.6126222,0.479201811 C80.2439444,-0.649181749 76.7885,0.446198949 73.7425333,1.41271133 C71.8351889,2.0177638 70.0359222,2.58824184 68.5015222,2.58824184 C66.9686444,2.58824184 65.1678556,2.0177638 63.2605111,1.41271133 C60.2130222,0.446198949 56.7560556,-0.649181749 53.3904222,0.477630246 C49.8893111,1.65158919 47.6836111,4.70513968 45.7397333,7.39880183 C44.5919778,8.98922546 43.5066333,10.493213 42.3619222,11.352859 C41.1898111,12.2329353 39.4514333,12.8458456 37.6095444,13.4933303 C34.5514,14.5698522 31.0822556,15.7909581 28.9465778,18.8209351 C27.7836,20.4695067 27.2523444,22.3506698 26.9905222,24.2585495 L0,24.2585495 L8.81671111,48.4999373 L0,72.7366103 L26.989,72.7366103 C27.2493,74.6460616 27.7820778,76.5256532 28.9435333,78.1757963 C31.0807333,81.2057733 34.5483556,82.4268792 37.6065,83.5034011 C39.4483889,84.1524574 41.1882889,84.7637961 42.3604,85.6438724 C43.5035889,86.50509 44.5889333,88.0075059 45.7382111,89.5995011 C47.6820889,92.2931633 49.8877889,95.3467138 53.3889,96.5206727 C56.7499667,97.6474847 60.2099778,96.552104 63.2589889,95.5871632 C65.1663333,94.9836823 66.9656,94.4116327 68.5,94.4116327 C70.0344,94.4116327 71.8336667,94.9821107 73.7410111,95.5871632 C75.8690778,96.2629361 78.1950333,97 80.5514333,97 C81.5698,97 82.5942556,96.8617023 83.6095778,96.5206727 C87.1106889,95.3482853 89.3133444,92.2963064 91.2572222,89.6026443 C92.4065,88.0106491 93.4918444,86.5066615 94.6396,85.645444 C95.8117111,84.7653677 97.5500889,84.1524574 99.3919778,83.5049727 C102.451644,82.4284507 105.919267,81.2073449 108.054944,78.1757963 C109.217922,76.5256532 109.749178,74.6460616 110.009478,72.7381819 L137,72.7381819 L128.183289,48.4999373 L137,24.2616926 Z M8.81823333,66.4314922 L15.3424778,48.4999373 L8.81823333,30.5683824 L26.6769444,30.5683824 C26.6312778,31.9655035 26.5262444,33.2589014 26.1959222,34.3087067 C25.7727444,35.6555378 24.7391556,37.1595253 23.6462,38.7530921 C21.7525556,41.5096168 19.6062222,44.6370309 19.6062222,48.4999373 C19.6062222,52.3644152 21.7525556,55.4886861 23.6462,58.2467824 C24.7391556,59.8387776 25.7727444,61.3443368 26.1959222,62.6911678 C26.5262444,63.7409731 26.6312778,65.034371 26.6769444,66.4314922 L8.81823333,66.4314922 Z M108.373089,54.5991804 C107.062456,56.5086317 105.706156,58.4825172 104.995278,60.743999 C104.253956,63.0997747 104.2159,65.5828471 104.177844,67.9857698 C104.136744,70.6039968 104.097167,73.0776399 103.118378,74.4669032 C102.1198,75.8844547 99.8379889,76.6875244 97.4237444,77.5377409 C95.2317444,78.3093793 92.9666778,79.1061627 91.0471556,80.5488592 C89.1519889,81.9726969 87.7332778,83.937153 86.3617556,85.8356033 C84.8258333,87.9619306 83.3766778,89.9703904 81.7235444,90.5235813 C80.1906667,91.0359114 77.9271222,90.3192778 75.5357111,89.560212 C73.2813,88.84515 70.9507778,88.1065145 68.5,88.1065145 C66.0507444,88.1065145 63.7187,88.84515 61.4658111,89.560212 C59.0683111,90.3192778 56.8062889,91.0390545 55.2734111,90.5235813 C53.6233222,89.9703904 52.1711222,87.960359 50.6336778,85.8324602 C49.2636778,83.9340099 47.8464889,81.9711254 45.9528444,80.5488592 C44.0333222,79.1061627 41.7667333,78.3093793 39.5762556,77.5377409 C37.1604889,76.6875244 34.8786778,75.8844547 33.8801,74.4669032 C32.8997889,73.0760683 32.8617333,70.6024253 32.8206333,67.9841982 C32.7841,65.5828471 32.7445222,63.0997747 32.0047222,60.7455706 C31.2938444,58.4840887 29.9375444,56.5102033 28.6269111,54.6023236 C27.1290444,52.41942 25.7133778,50.3575269 25.7133778,48.5015088 C25.7133778,46.6470623 27.1290444,44.5835977 28.6269111,42.4006941 C29.9375444,40.4928144 31.2938444,38.5189289 32.0047222,36.2574471 C32.7445222,33.903243 32.7825778,31.4217421 32.8221556,29.020391 C32.8617333,26.4005924 32.9028333,23.9269493 33.8816222,22.5361144 C34.8802,21.1185629 37.1620111,20.3154933 39.5777778,19.4652767 C41.7682556,18.6936384 44.0333222,17.896855 45.9528444,16.4541585 C47.8464889,15.0318923 49.2636778,13.0674362 50.6336778,11.1705575 C52.1711222,9.04265866 53.6218,7.03262722 55.2734111,6.4794364 C55.6341778,6.3584259 56.0360444,6.30656426 56.4683556,6.30656426 C57.8779333,6.30656426 59.6330556,6.86289822 61.4658111,7.44437721 C63.7202222,8.15943922 66.0507444,8.89807469 68.5015222,8.89807469 C70.9507778,8.89807469 73.2828222,8.15943922 75.5372333,7.44437721 C77.9347333,6.68531139 80.1952333,5.96867782 81.7265889,6.48100796 C83.3766778,7.03419879 84.8273556,9.04423023 86.3632778,11.1689859 C87.7348,13.0690078 89.1535111,15.0334639 91.0486778,16.45573 C92.9682,17.896855 95.2332667,18.6952099 97.4252667,19.4668483 C99.8395111,20.3170649 102.121322,21.1201345 103.1199,22.537686 C104.101733,23.9285209 104.139789,26.4005924 104.179367,29.0188194 C104.2159,31.4201705 104.255478,33.903243 104.9968,36.2574471 C105.707678,38.5205005 107.063978,40.4943859 108.374611,42.4038372 C109.872478,44.5851692 111.288144,46.6470623 111.288144,48.5015088 C111.286622,50.3543838 109.870956,52.4162769 108.373089,54.5991804 Z M128.181767,66.4314922 L110.323056,66.4314922 C110.370244,65.034371 110.473756,63.7409731 110.804078,62.6911678 C111.227256,61.3443368 112.260844,59.8387776 113.355322,58.2452109 C115.247444,55.4886861 117.393778,52.3628437 117.393778,48.4999373 C117.393778,44.6370309 115.247444,41.51276 113.355322,38.7562352 C112.260844,37.1626685 111.227256,35.6586809 110.804078,34.3087067 C110.473756,33.2589014 110.368722,31.9655035 110.323056,30.5683824 L128.180244,30.5683824 L121.657522,48.4999373 L128.181767,66.4314922 Z" fill="url(#linearGradient-1)" />
								<path d="M68.5007671,15.5679012 C50.7444602,15.5679012 36.2991453,30.3403873 36.2991453,48.5007846 C36.2991453,66.6596127 50.7444602,81.4320988 68.5007671,81.4320988 C86.2555398,81.4320988 100.700855,66.6596127 100.700855,48.5007846 C100.700855,30.3419565 86.2555398,15.5679012 68.5007671,15.5679012 Z M68.5007671,76.04816 C53.6488661,76.04816 41.5663536,63.6906789 41.5663536,48.5007846 C41.5663536,33.3108903 53.6488661,20.9534092 68.5007671,20.9534092 C83.3511339,20.9534092 95.4336464,33.3108903 95.4336464,48.5007846 C95.4336464,63.6906789 83.3526682,76.04816 68.5007671,76.04816 Z" fill="url(#linearGradient-2)" />
							</g>
							<path d="M81.4252632,59.1836152 C80.1266536,56.1002502 79.9031842,53.4878171 79.8681576,52.4613139 L79.8681576,44.0153834 C79.8681576,37.5633402 74.7773979,32.3333333 68.498012,32.3333333 C62.2179255,32.3333333 57.1269907,37.5633402 57.1269907,44.0153834 L57.1269907,52.5834074 C57.0783038,53.687573 56.8231353,56.220324 55.574964,59.1836152 C53.8966665,63.1655147 55.2852943,62.6910943 56.5294376,62.3633698 C57.7732306,62.037114 60.5510117,60.7583455 61.4189698,62.3338103 C62.2862273,63.9083571 63.009876,65.2761711 65.0349363,64.3842462 C67.0601718,63.4932393 68.0144704,63.1959921 68.3036146,63.1959921 L68.6967877,63.1959921 C68.9857568,63.1959921 69.9404056,63.4932393 71.9652908,64.3842462 C73.9905263,65.2761711 74.7139998,63.9083571 75.5817828,62.3338103 C76.4492154,60.7583455 79.2268214,62.037114 80.4709647,62.3633698 C81.7149328,62.6910943 83.1030352,63.1655147 81.4252632,59.1836152 M64.988351,38.7033077 C66.2130546,38.7033077 67.2060574,40.3173283 67.2060574,42.3088288 C67.2060574,44.300513 66.2130546,45.9149008 64.988351,45.9149008 C63.7636475,45.9149008 62.7704695,44.300513 62.7704695,42.3088288 C62.7704695,40.3173283 63.7636475,38.7033077 64.988351,38.7033077 M68.498012,53.1154779 C65.7992158,53.1154779 63.5273934,50.386643 62.8427993,47.3500957 C64.1648767,49.2178504 66.2058741,50.4178548 68.498012,50.4178548 C70.7897996,50.4178548 72.830797,49.2178504 74.1530495,47.3500957 C73.4684555,50.386643 71.1962828,53.1154779 68.498012,53.1154779 M72.0078481,45.9149008 C70.7820937,45.9149008 69.7896163,44.300513 69.7896163,42.3088288 C69.7896163,40.3173283 70.7820937,38.7033077 72.0078481,38.7033077 C73.233077,38.7033077 74.2252042,40.3173283 74.2252042,42.3088288 C74.2252042,44.300513 73.233077,45.9149008 72.0078481,45.9149008" fill="url(#linearGradient-3)" />
						</g>
					</g>
				</g>
			</svg>
			<div className="pitch-container">
				<span className="pitch-text">{t('subscribe_pitch')}</span>
				<a href="https://www.ghostery.com/about-ghostery/browser-extension-privacy-policy/" target="_blank" rel="noopener noreferrer">
					<span className="pitch-learn-more">{t('subscribe_pitch_learn_more')}</span>
				</a>
				<a href="https://www.ghostery.com/about-ghostery/browser-extension-privacy-policy/" target="_blank" rel="noopener noreferrer">
					<span className="pitch-become-supporter">{t('subscribe_pitch_button_label')}</span>
				</a>
				{ supporter &&
					<Link to="/login">
						<span className="pitch-already-supporter">{t('subscribe_pitch_sign_here')}</span>
					</Link>
				}
			</div>
		</div>
	);
}

export default Subscribe;
