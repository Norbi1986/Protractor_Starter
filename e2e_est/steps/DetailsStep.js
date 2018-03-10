import {expect} from '../steps/BaseStep.js';
import {DetailsPage} from '../pages/DetailsPage.js';
let detailsPage = new DetailsPage();

export class DetailsStep {
	constructor() {}
	
	checkHotelName(name){
		let currentHotelName = detailsPage.getHotelName();
		expect(currentHotelName).to.eventually.equal(name);
	}
}