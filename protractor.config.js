require('babel-core/register');
exports.config = {
 	framework: 'jasmine2',

	seleniumAddress: 'http://localhost:4444/wd/hub',
	allScriptsTimeout: 110000,
  	specs: ['./e2e_est/specs/*.js'],
  	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 90000,
		isVerbose: false,
		includeStackTrace: false
	},
	/*multiCapabilities: [{
        name: 'normal',
       	browserName: 'chrome',
       	//browserName: 'MicrosoftEdge',
       	//browserName: 'firefox',
      	//marionette : true,
        maxInstances: 2,
        shardTestFiles: true,
        chromeOptions: {
            args: ['show-fps-counter=true', '--window-size=1024,768']
        }
    }],*/
    /*capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: [
                "--headless",
                "--disable-gpu",
                "--window-size=800,600"
            ]
        }
    }*/
    
};