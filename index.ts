import {Ptor} from "protractor";

export default class AddCustomLocators {

    static createCustomLocator(protractor: Ptor, locatorName: string, locatorAttribute: string) {
        console.log('1................................................');
        let script = function (expected, parentElement: HTMLElement | null) {
            console.log('2................................................', locatorAttribute);
            let using = parentElement || document;
            let nodes = using.querySelectorAll(`[${locatorAttribute}]`);
            return Array.prototype.filter.call(nodes, function (node) {
                console.log('3................................................');
                return (node.getAttribute(`${locatorAttribute}`) === expected);
            });
        };
    protractor.by.addLocator(locatorName,
        script);
};

/*
 static createCustomLocator(protractor: Ptor, locatorName: string) {
 console.log('1................................................');
 protractor.by.addLocator(locatorName,
 function (expected, parentElement: HTMLElement | null) {
 console.log('2................................................');
 let using = parentElement || document;
 let nodes = using.querySelectorAll('[data-reactid]');
 return Array.prototype.filter.call(nodes, function (node) {
 console.log('3................................................');
 return (node.getAttribute('data-reactid') === expected);
 });
 });
 };
 */
}