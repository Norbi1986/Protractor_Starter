
export class SearchResultPage {
	constructor() { }

	waitForElement() {
		let until = protractor.ExpectedConditions;
		browser.wait(until.presenceOf(this.checkSearchResultPageIsAppeared()), 10000, 'Element taking too long to appear in the DOM');
	}

	checkSearchResultPageIsAppeared() {
		return element(by.css('.main-content .search-result-list'));
	}

}