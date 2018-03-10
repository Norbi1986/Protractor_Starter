
export class DetailsPage {
	
	constructor(){}

	getHotelName() {
		let hotelName = element(by.css('.sticky-container .hotel-name')).getText();
		return hotelName;
	}

}