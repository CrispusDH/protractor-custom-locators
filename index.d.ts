/// <reference types="protractor" />
import {ElementFinder} from "protractor";

declare module protractor {
    interface IProtractorLocatorStrategy {
        /**
         * Find an element by data-test-id.
         *
         * @param {string} testId for it element
         */
        testId(testId: string): ElementFinder;
    }
}
