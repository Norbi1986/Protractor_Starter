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
    afterAll(() => {
         browser.close(); 
    }); 

    it('Open virgin holidays page and check it', () => {

    });


});

