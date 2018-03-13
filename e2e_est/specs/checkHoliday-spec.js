'use strict'

import {MainPage} from '../pages/MainPage.js';
import {MainStep} from '../steps/MainStep.js';
import {SearchResultStep} from '../steps/SearchResultStep.js';
import {DetailsStep} from '../steps/DetailsStep.js';


describe('Basic tests for angular', () => {
    let mainPage;
    let mainStep;
    let searchResultStep;
    let detailsStep;
    beforeAll(() =>{
        mainPage = new MainPage();
        mainStep = new MainStep();
        searchResultStep = new SearchResultStep();
        detailsStep = new DetailsStep();
        mainPage.openPage();
    });
    afterAll(() => {
         browser.close(); 
    }); 

    it('Open virgin holidays page and check it', () => {
        mainStep.iCanSeeTheVirginPageIsOpened();
        mainStep.iCanSeeTheFollowingText("Customer support");
    });

    it('Select Destination Caribien', () => {
        mainStep.clickOnDestinationTab();
        mainStep.clickOnSelectedSubMenuOnDestination("Caribbean");
        mainStep.checkSelectedDestenationTitle("Holidays in the Caribbean");
    });

    it('Find holidays', () => {
        mainStep.clickOnWhereToField();
        mainStep.writeIntoWhereToField("Caribbean");
        mainStep.clickOnFlyingFrom();
        mainStep.selectFlyingFrom("Edinburgh");
        mainStep.clickOnFindHoldaysButton();
        searchResultStep.theResultPageIsVisible();
    });

});

    // START CODE HERE
