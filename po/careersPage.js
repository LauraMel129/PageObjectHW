const BasePage = require('./basePage');
const provider = require('./pageObjectProvider');

class CareersPage extends BasePage {
    constructor(){
        super();

        this.url = '/careers';

        this.jobForm = element.all(by.className("recruiting-search__form job-search__form")).get(0);
        this.jobID = element(by.id("new_form_job_search_1445745853_copy-keyword"));

        this.location = element(by.className("select2-selection__rendered"));
        this.locationList = element(by.css(".select2-results__options.open"));
        this.allLocations = element(by.css(".select2-results__option"));

        this.skills = element.all(by.css("div.selected-params")).get(0);
        this.skillsList = element(by.className("multi-select-dropdown"));
        this.skillQA = element(by.cssContainingText(".checkbox-custom-label", "Software Test Engineering"));

        this.findButton = element.all(by.className("recruiting-search__submit")).get(0);
    };
    CareersPage() {
        this.clickCareers = () => this.careersLink.click()
        this.getTitle = (done) => {
            browser.get('https://www.epam.com/careers')
                .then(() => expect(browser.getTitle()).toEqual('Explore Professional Growth Opportunities | EPAM Careers'))
                .finally(done);
        };
        this.pageIsLoaded = (done) => {
            browser.wait(EC.visibilityOf(epamLogo))
                .then(() => browser.wait(EC.visibilityOf(jobForm)))
                .then(() => {
                    expect(epamLogo.isDisplayed).toBeTruthy();
                    expect(jobForm.isDisplayed).toBeTruthy();
                })
                .finally(done);
        };
        this.allowSearchJob = (done) => {
            jobID.sendKeys("QA Automation Engineer")
                .then(() => location.click())
                .then(() => browser.wait(EC.visibilityOf(locationList)))
                .then(() => allLocations.click())
                .then(() => skills.click())
                .then(() => browser.wait(EC.visibilityOf(skillsList)))
                .then(() => skillQA.click())
                .then(() => findButton.click())
                .then(() => browser.wait(EC.visibilityOf(foundJobsLabel)))
                .then(() => foundJobs.count())
                .then((count) => {
                    if (count < 1) {
                        expect(foundJobsLabel.getText()).toBe(`Sorry, your search returned no results. Please try another combination.`);
                    } else if (count === 1) {
                        expect(foundJobsLabel.getText()).toBe(`WE FOUND ${count} JOB OPENING RELATED TO "QA AUTOMATION ENGINEER"`);
                    } else {
                        expect(foundJobsLabel.getText()).toBe(`WE FOUND ${count} JOB OPENINGS RELATED TO "QA AUTOMATION ENGINEER"`);
                    }
                })
                .finally(done);
        }
    };
}
module.exports = CareersPage;