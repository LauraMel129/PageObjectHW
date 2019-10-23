const AboutPage = require('./../po/aboutPage'),
    CareersPage = require('./../po/careersPage'),
    SearchResultsPage = require('./../po/searchResultsPage'),
    HomePage = require('./../po/homePage'),
    Helper = require('./../support/helper.js');

describe('Sign up to the site', () => {
    let joinPage, homePage, helper;

    beforeAll(() => {
        homePage = new HomePage();
        aboutPage = new AboutPage();
        careersPage = new CareersPage();
        searchResultsPage = new SearchResultsPage();
        helper = new Helper();
        return homePage.visit();
    });

    it('should navigate to Careers page', () => {
        helper.clickToElement(homePage.navigationBar.Careers);
        helper.waitForVisibilityOf(careersPage.findButton, 5000);
        return expect(careersPage.checkPageTitle('FIND YOUR DREAM JOB')).to.eventually.be.true;
    });
});