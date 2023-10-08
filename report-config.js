const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
    jsonDir: 'reports/cucumber',
    reportPath: 'reports/merged-report.html',
    displayDuration: true,
    durationInMS: true,
    pageTitle: 'Zendesk - Daily cucumber Report',
    metadata: {
        browser: {
            name: 'Chrome',
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '10',
        },
    },
});