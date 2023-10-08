import {defineConfig} from "cypress";

const browserify = require("@cypress/browserify-preprocessor");
const cucumber = require("cypress-cucumber-preprocessor").default;
const resolve = require("resolve");

export default defineConfig({
    e2e: {
        baseUrl: "https://www.saucedemo.com",
        pageLoadTimeout: 3000,
        defaultCommandTimeout: 3000,
        requestTimeout: 3000,
        responseTimeout: 3000,
        videosFolder: "reports/tests/videos",
        screenshotsFolder: "reports/tests/screenshots",
        chromeWebSecurity: false,
        numTestsKeptInMemory: 2,
        experimentalInteractiveRunEvents: true,
        trashAssetsBeforeRuns: false,
        viewportWidth: 1920,
        viewportHeight: 1080,
        specPattern: "**/**/**/*.{feature,features}",
        setupNodeEvents(on, config) {
            const options = {
                ...browserify.defaultOptions,
                typescript: resolve.sync("typescript", {baseDir: config.projectRoot})
            };

            on("file:preprocessor", cucumber(options));

            on("before:browser:launch", (browser, browserLaunchOptions) => {
                if (browser.family === "chromium" && browser.name !== "electron") {
                    browserLaunchOptions.args.push("--start-maximized");
                    browserLaunchOptions.args.push("--disable-site-isolation-trails");
                    browserLaunchOptions.args.push("--no-sandbox");
                    browserLaunchOptions.args.push("--disable-infobars");
                    browserLaunchOptions.args.push("--disable-extensions");
                    browserLaunchOptions.args.push("--ignore-certificate-errors");

                    return browserLaunchOptions;
                }

                if (browser.name === "electron") {
                    browserLaunchOptions.preferences.maximized = true;
                    browserLaunchOptions.args.push("--disable-site-isolation-trails");
                    browserLaunchOptions.args.push("--no-sandbox");
                    browserLaunchOptions.args.push("--disable-infobars");
                    browserLaunchOptions.args.push("--disable-extensions");
                    browserLaunchOptions.args.push("--ignore-certificate-errors");

                    return browserLaunchOptions;
                }

                if (browser.name === "chrome") {
                    browserLaunchOptions.preferences.maximized = true;
                    browserLaunchOptions.args.push("--disable-site-isolation-trails");
                    browserLaunchOptions.args.push("--no-sandbox");
                    browserLaunchOptions.args.push("--disable-infobars");
                    browserLaunchOptions.args.push("--disable-extensions");
                    browserLaunchOptions.args.push("--ignore-certificate-errors");

                    return browserLaunchOptions;
                }

            })
            return config;
        },
    },
});
