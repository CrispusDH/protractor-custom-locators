import {Ptor} from "protractor";

export class AddCustomLocators {

    static async createCustomLocator(protractor: Ptor, locatorName: string, locatorAttribute: string) {
        console.log("''''''''''''''''''''''''''''''''''");
        console.log(this.createCustomLocator);
        await protractor.by.addLocator(locatorName,
            async function (expected, parentElement) {
                let using = parentElement || document;
                console.log("''''''''''''''''''''''''**********''''''''''''''''''''''''''''''''''");
                console.log(locatorAttribute);
                let nodes = await using.querySelectorAll(`[${locatorAttribute}]`);
                return Array.prototype.filter.call(nodes, async function (node) {
                    return (node.getAttribute(`${locatorAttribute}`) === expected);
                });
            });
    }
/*
 'use strict';

 const dataTestId = function (ptor) {
 ptor.by.addLocator('dataTestId',
 function (dataTestId, parentElement) {
 let using = parentElement || document;
 let nodes = using.querySelectorAll('[data-test-id]');
 return Array.prototype.filter.call(nodes, function (node) {
 return (node.getAttribute('data-test-id') === dataTestId);
 });
 });
 };

 const dataReactId = function (ptor) {
 ptor.by.addLocator('dataReactId',
 function (dataReactId, parentElement) {
 let using = parentElement || document;
 let nodes = using.querySelectorAll('[data-reactid]');
 return Array.prototype.filter.call(nodes, function(node) {
 return (node.getAttribute('data-test-id') === dataTestId);
 });
 })
 };

 const addCustomLocator = {
 dataTestId: dataTestId,
 dataReactId: dataReactId
 };

 export default addCustomLocator;
 */
}