'use strict'

import {expect} from '../steps/BaseStep.js';
import {SearchResultPage} from '../pages/SearchResultPage.js';

let searchResultPage = new SearchResultPage();

export class SearchResultStep {
	constructor() {}

	waiter() {
		searchResultPage.waitForElement();
	}

	theResultPageIsVisible() {
		let element = searchResultPage.checkSearchResultPageIsAppeared();
		expect(element.isDisplayed()).to.eventually.be.true;
	}

	//FOR Practice

	clickOnSelectedMoreDetailsButton() {
		searchResultPage.clickOnSelectedMoreDetailsButton();
	}
}