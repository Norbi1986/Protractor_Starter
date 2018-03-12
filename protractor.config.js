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
};