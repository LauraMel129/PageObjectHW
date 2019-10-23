const BasePage = require('./basePage');
const provider = require('./pageObjectProvider');

class SearchResultsPage extends BasePage {
    constructor() {
        super();

        this.url = '/search';

        this.navigationContainer = element(by.className('header__content'));
        this.Insights = element(by.cssContainingText('top-navigation__item-link', 'Insights'));
        this.About = element(by.cssContainingText('top-navigation__item-link', 'About'));
        this.whatWeDo = element(by.cssContainingText('top-navigation__item-link', 'What We Do'));
        this.howWeDoIt = element(by.cssContainingText('top-navigation__item-link', 'How We Do It'));
        this.Search = element(by.className('header-search__button header__icon'));
        this.Careers = element(by.className('top-navigation__item-link', 'Careers'));
    };

    openSearch () {
        return this.search.click()
    };
    

    searchPanelOpened () {
       return  browser.wait(EC.visibilityOf(searchPanel))
    };

    performSearch () { 
        return this.search.sendKeys("job")
        .then(() => this.searchButton.click())
        .then(() => require('../page/resultsPage'))
    };

    performSearchWithDropdown (filterName) {
        return this.setValueFromDropdown(filterName)
        .then(() => this.searchInput.click())
        .then(() => this.searchDropdown.click())
        .then(() => this.searchButton.click())
        .then(() => require('../page/resultsPage'))
    };
}

module.exports = SearchResultsPage;