'use strict'

import {MainPage} from '../pages/MainPage.js';
import {MainStep} from '../steps/MainStep.js';

describe('Basic tests for angular', () => {
    let mainPage;
    let mainStep;
    beforeAll(() =>{
        mainPage = new MainPage();
        mainStep = new MainStep();
        mainPage.openPage();
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

});
