'use strict'


import {expect} from '../steps/BaseStep.js';
import {MainPage} from '../pages/MainPage.js';

export class MainStep  {
	constructor() {
		}

	iCanSeeTheFollowingText() {
		let mainPage = new MainPage();
		let logo = mainPage.getLogo();
		expect(logo).to.eventually.equal("Customer support");
	}
}
