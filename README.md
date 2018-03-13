Protractor Jasmine chai-as-promise Starter and example

Prepare:
#### Download NodeJS
	1. Download NodeJS from https://nodejs.org/en/

#### Install Protractor
	2. Write the following command into the command promp or terminal:
```
npm install -g protractor
```

#### Update the selenium webDrivers
	3. Write the following command into the command promp or terminal:
```
webdriver-manager update
```

#### Start the drivers
	4. Write the following command into the command promp or terminal:
```
webdriver-manager start
```

#### Clone source code for testing
	5. Clone this repository
	6. Navigate to the folder

#### Install all npm packages
	7. Write the following command into the command promp or terminal: 
```
npm install
```

#### Run the protractor tests
	8. Run Protractor test:
```
protractor protractor.config.js
```

#### Free the 4444 port

* If the webdriver-manager can't start because the designated port is occupied, it can be freed. Open a console in admin mode (windows: Command Prompt) and type the next line:
```
netstat -ano | findstr :4444
```
* Then take note of the PID (last attribute) of the occuping task, then run the next line:
```
taskkill /PID insertNotedPIDHere /F
```