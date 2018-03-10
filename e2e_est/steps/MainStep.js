'use strict'


import {expect} from '../steps/BaseStep.js';
import {MainPage} from '../pages/MainPage.js';
let mainPage = new MainPage();

export class MainStep  {
	constructor() {
		}

	iCanSeeTheVirginPageIsOpened() {
		let title = mainPage.checkThePageisOpened();
		expect(title).to.eventually.equal("All Inclusive & Package Holidays | Virgin Holidays");
	}

	iCanSeeTheFollowingText(text) {
		let logo = mainPage.getLogo();
		expect(logo).to.eventually.equal(text);
	}

	clickOnDestinationTab() {
		mainPage.clickOnDestinationTab();
	}

	clickOnSelectedSubMenuOnDestination(name) {
		mainPage.clickOnDestinationSubMenu(name);
	}

	checkSelectedDestenationTitle(name) {
		let destinationTitle = mainPage.getDestinationTitle();
		expect(destinationTitle).to.eventually.equal(name);
	}

	clickOnWhereToField() {
		mainPage.clickOnWhereToField();
	}

	writeIntoWhereToField(dest) {
		mainPage.writeIntoWhereToField(dest);
	}

	clickOnFlyingFrom() {
		mainPage.clickOnFlyingFromField();
	}

	selectFlyingFrom(city) {
		mainPage.selectFlyingFromOption(city);
	}

	clickOnFindHoldaysButton() {
		mainPage.clickOnFindHolidays();
	}

// FOR PRACTICE

	clickOnTourButton() {
		mainPage.clickOnTourButton();
	}
	clickOnWherToFieldAtTour() {
		mainPage.clickOnWherToFieldAtTour();
	}

	selectWherToAtTours(countryName){
		mainPage.selectWherToAtTours(countryName);
	}

	checkWherToAtToursField(countryName) {
		let country = mainPage.getWherToAtToursField();
		expect(country).to.eventually.equal(countryName);
	}

	clickOnSearchTourButton() {
		mainPage.clickOnSearchButton();
	}
}
