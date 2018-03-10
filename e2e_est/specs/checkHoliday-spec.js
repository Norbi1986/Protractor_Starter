'use strict'

import {MainPage} from '../pages/MainPage.js';
import {MainStep} from '../steps/MainStep.js';

describe('Basic tests for angular', function() {
    let mainPage;
    let mainStep;
    beforeAll(() =>{
        mainPage = new MainPage();
        mainStep = new MainStep();
    });

    it('Open virgin holidays page', function() {
        mainPage.openPage();
        mainStep.iCanSeeTheFollowingText();
    });

});
