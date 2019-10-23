const BasePage = require('./basePage');
const provider = require('./pageObjectProvider');

class AboutPage extends BasePage {
    constractor() {
        this.url = '/about';

        this.aboutURL = "https://www.epam.com/about";
        this.AboutButton = element(by.css("[href='/about']"))
        this.youTubeVideo = element(by.css("div.ytp-cued-thumbnail-overlay"));
        this.titleAbout = element(by.cssClassName("title"));
        this.section = element(by.css('div.section-ui'));
    };
    AboutPage() {

        this.openAboutPage = () => this.navigationBar.click('About');

        this.getTitle = (done) => {
            browser.get('https://www.epam.com/about')
                .then(() => expect(browser.getTitle()).toEqual('About'))
                .finally(done);
        };

        this.sectionIsVisible = (done) => {
            browser.wait(EC.visibilityOf(section))
                .then(() => browser.wait(EC.visibilityOf(title)))
                .then(() => expect(section.isDisplayed).toBeTruthy())
                .finally(done);
        };

        this.aboutPageShouldBeFullyDisplayed = () =>
            this.youTubeVideo.isDisplayed().then((isDisplayed) =>
                expect(isDisplayed).to.be.true);

        this.methodOnlyForAboutPage = () => "method for about page";

    }

}
module.exports = AboutPage;