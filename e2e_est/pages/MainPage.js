
export class MainPage {
  constructor() { }
  
  openPage() {
    browser.get('https://www.virginholidays.co.uk/');
    browser.driver.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);
    browser.waitForAngular();
  }


}
