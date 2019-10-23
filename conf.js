const GLOBAL_TIMEOUT = 40e3;
const yargs = require('yargs').argv;

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec/*.js'],
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 2,
        chromeOptions: {
            args: ['--no-sandbox']
        }
    },
    onPrepare: function () {
        global.GLOBAL_TIMEOUT = GLOBAL_TIMEOUT;
        global.ec = protractor.ExpectedConditions;
        browser.ignoreSynchronization = true;
        const chai = require('chai');
        chai.use(require('chai-as-promised'));
        global.expect = chai.expect;

        browser.manage().window().maximize();
    }
};
