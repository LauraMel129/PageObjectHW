const BasePage = require('./basePage');
const provider = require('./pageObjectProvider');

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = 'http://www.epam.com/';
        this.title = element(by.cssContainingText('.title-slider__slide-row', 'Engineering the Future'));
    }

    homePageShouldBeFullyDisplayed() {
        return this.title.isDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;

        })
    };

}

module.exports = HomePage;