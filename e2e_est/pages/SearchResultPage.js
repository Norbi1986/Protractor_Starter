
export class SearchResultPage {
	constructor() { }

	waitForElement() {
		let until = protractor.ExpectedConditions;
		browser.wait(until.presenceOf(this.checkSearchResultPageIsAppeared()), 10000, 'Element taking too long to appear in the DOM');
	}

	checkSearchResultPageIsAppeared() {
		return element(by.css('.main-content .search-result-list'));
	}

	//FOR Practice
	 
	 clickOnSelectedMoreDetailsButton() {
	 	/*let holidays = element.all(by.css('.listView .holiday'));
	 	let num = element.all(by.css('.listView .holiday')).count().then((numberOfHolidays)=>{
	 		for(let i = 0; i < numberOfHolidays; i++) {
	 			
	 			holidays.get(i).element(by.css('.hotel-name')).getText().then((name)=>{
	 				if(name === hotelName) {
	 					
						holidays.get(i).element(by.css('.more-details')).click();
	 				}
	 			});
	 		
	 		}
	 	});*/
	 	//holidays.get(num).element(by.css('.more-details')).click();
	 	element.all(by.css('.listView .holiday .more-details')).first().click();
  	}
  	
}
