require('babel-core/register');
exports.config = {
  framework: 'jasmine2',


seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['./e2e_est/specs/*.js'],
  jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000,
		isVerbose: false,
		includeStackTrace: false
	},
	/*onPrepare: () => {
		var chai = require("chai");
		var chaiAsPromised = require("chai-as-promised");
			chai.use(chaiAsPromised);
		var expect = chai.expect;
	}*/
};