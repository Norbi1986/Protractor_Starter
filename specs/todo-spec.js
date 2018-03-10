var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;



describe('Basic tests for angular', function() {
    it('Open angular page', function() {
        browser.get('https://angular.io/');
        let logo = element(by.css('.hero-headline')).getText();
        expect(logo).to.eventually.equal("One framework.Mobile & desktop.");
    });

    it('Open angular page', function() {
        browser.get('https://angular.io/');
        element(by.css('.hero-headline')).getText().then((value) => {
            expect(value).to.equal("One framework.Mobile & desktop.");
        });
    });

});


