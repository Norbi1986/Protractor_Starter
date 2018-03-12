
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

	clickOnSelectedMoreDetailsButton(hotelName) {
	 	let holidays = element.all(by.css('.listView .holiday'));
	 	let isClicked = false;
	 	element.all(by.css('.listView .holiday')).count().then((numberOfHolidays)=>{
	 		return numberOfHolidays;
	 	}).then((numberOfHolidays)=>{
	 		let selectedeHotelIndex = [];
	 		for(let i = 0; i < numberOfHolidays; i++) {	
	 			holidays.get(i).element(by.css('.hotel-name')).getText().then((name)=>{
	 				if(name === hotelName) {
	 					selectedeHotelIndex.push(i);
	 				}
	 			});
	 		}
	 		return selectedeHotelIndex;
	 	}).then((selectedeHotelIndex)=>{
	 		holidays.get(selectedeHotelIndex[0]).element(by.css('.more-details')).click();
	 	}); 	
  	}

  	clickOnCheckboxOnTours(number) {
  		let checkBoxesForTour = element.all(by.css('.filter-group .tick'));
  		checkBoxesForTour.get(number).click();
  	}


  	selectedNumberOfCheckboxIsChecked(number) {
  		/*browser.sleep(2000);
  		var EC = protractor.ExpectedConditions;
  		browser.wait(EC.visibilityOf(checkBoxesForTour), 10000);*/
  		let index = number + 1;
  		let checkBoxesForTour = element(by.xpath('(//*[contains(@class, \'hierarchy-filter\')]//input)['+index+']'));
  		return checkBoxesForTour.isSelected();
  	}

  	clickOnViewMoreButton() {
  		element(by.css('.tour-activity .btn-primary')).click();
  	}
}
