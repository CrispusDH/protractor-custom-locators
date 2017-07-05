import {Ptor} from "protractor";

export class AddCustomLocators {

    createCustomLocator(protractor: Ptor, locatorName: string, locatorAttribute: string) {
        protractor.by.addLocator(locatorName,
            function (dataTestId, parentElement) {
                let using = parentElement || document;
                let nodes = using.querySelectorAll('[${locatorAttribute}]');
                return Array.prototype.filter.call(nodes, function (node) {
                    return (node.getAttribute(locatorAttribute) === dataTestId);
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