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

    it('should check page title of Home Page', () => {
        return expect(homePage.checkPageTitle('EPAM | Enterprise Software Development, Design & Consulting')).to.eventually.be.true;
    });

    it('should check that Home page is fully loaded', () => {
        return homePage.homePageShouldBeFullyDisplayed();
    });

    it('should click on About section', () => {
        return helper.clickToElement(homePage.navigationBar.About);
    });

    it('should check page title of About Page', () => {
        helper.waitForVisibilityOf(aboutPage.titleAbout, 5000);
        return expect(aboutPage.checkPageTitle('About')).to.eventually.be.true;
    });

    it('should submit Sign Up form and navigate to Home page', () => {
        helper.clickToElement(homePage.navigationBar.Careers);
        helper.waitForVisibilityOf(careersPage.findButton, 5000);
        return expect(careersPage.checkPageTitle('FIND YOUR DREAM JOB')).to.eventually.be.true;
    });
});