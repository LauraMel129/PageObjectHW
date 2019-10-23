const NavigationBar = require('./common/navigationBarComponent.js');

class BasePage {

    constructor() {
        this.navigationBar = new NavigationBar();
    }

    visit() {
        browser.get('http://www.epam.com/');
        return browser.wait(ec.elementToBeClickable(this.navigationBar.epamLogo), GLOBAL_TIMEOUT);
    }

    checkPageTitle(pageTitle) {
        return this.getPageTitle().then((title) => {
            return title === pageTitle;
        });
    }

    getPageTitle() {
        return browser.getTitle();
    }
}

module.exports = BasePage;