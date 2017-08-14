module.exports = {
    'Display the main page of customers': function (browser) {
        browser
            .url(browser.launchUrl)
            .waitForElementVisible('adesso-customer', 10000)
            .assert.containsText('adesso-customer', 'minimalistic')
            .end();
    }
};
