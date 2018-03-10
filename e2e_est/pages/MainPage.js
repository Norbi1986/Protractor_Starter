
export class MainPage {
  constructor() { }
  
  openPage() {
    browser.get('https://www.virginholidays.co.uk/');
    browser.driver.manage().window().maximize();
    browser.sleep(2000);
  }

  getLogo() {
    let logo = element(by.css('.menu-item-text')).getText();
    return logo;
  }
}
