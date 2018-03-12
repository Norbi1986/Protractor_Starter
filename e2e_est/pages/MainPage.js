
export class MainPage {
  constructor() { }
  
  openPage() {
    browser.get('https://www.virginholidays.co.uk/');
    browser.driver.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);
    browser.waitForAngular();
  }

  checkThePageisOpened() {
    let pageElement = browser.getTitle();
    return pageElement;
  }

  getLogo() {
    let logo = element(by.css('.menu-item-text')).getText();
    return logo;
  }

  clickOnDestinationTab() {
    browser.actions().mouseMove(element(by.css('.main-menu.mega-menu-desktop .zero-level-0'))).perform();
  }

  clickOnDestinationSubMenu(name) {
    let dest = element(by.css('.main-menu.mega-menu-desktop .zero-level-0'));
    let subMenus = dest.all(by.repeater('submenu in menu.subMenu'));
    let number = dest.all(by.repeater('submenu in menu.subMenu')).count().then((val) => {
        for (let i = 0; i < val; i++) {
            subMenus.get(i).getText().then((value)=> {
              if(value === name) {
              subMenus.get(i).click();
            }
          });
        }
    });    
  }

  getDestinationTitle() {
      let destinationTitle = element(by.css('.destination-title-section .qa-page-heading')).getText();
      return destinationTitle;
  }


  clickOnWhereToField() {
    element(by.css('#goingTo')).click();
  }

  writeIntoWhereToField(city) {
    element(by.css('#goingTo input')).clear();
    element(by.css('#goingTo input')).sendKeys(city);
    element(by.css('#goingTo input')).sendKeys(protractor.Key.ENTER);
  }

  clickOnFlyingFromField() {
    element(by.css('#departingFrom')).element(by.model('selectedDepartureGateway')).click();
  }

  selectFlyingFromOption(city){
    let cities = element.all(by.options('departureGateway.description for departureGateway in gateways track by departureGateway.description'));
    cities.count().then((number)=>{
        for (let i = 0; i < number; i++) {
            cities.get(i).getText().then((value) => {
                if(value === city) {
                   cities.get(i).click();
                }
            });
        }
    });
  }

  clickOnFindHolidays() {
    element(by.name('holidaySearchForm')).element(by.css('.search-panel-form .submit-container button')).click();
  }

  clickOnToursButton() {
    element(by.css('.qa_tours_button')).click();
  }

// FOR PRACTICE

  clickOnTourButton() {
    element(by.css('.qa_tours_button')).click();
  }

  clickOnWherToFieldAtTour() {
    element(by.css('.qa_depFrom')).click();
  }

  selectWherToAtTours(countryName) {
    let countries = element.all(by.options('departureGateway.description for departureGateway in gateways track by departureGateway.description'));
    countries.count().then((number)=>{
        for (let i = 0; i < number; i++) {
            countries.get(i).getText().then((value) => {
                if(value === countryName) {
                   countries.get(i).click();
                }
            });
        }
    });
  }

  getWherToAtToursField() {
      let countryName = element(by.css('.qa_depFrom')).getText();
      return countryName
  }

  clickOnSearchButton() {
      element(by.css('.search-button')).click();
  }
}
