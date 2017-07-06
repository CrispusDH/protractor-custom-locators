import {Ptor} from "protractor";

export class AddCustomLocators {

    static createCustomLocator(protractor: Ptor, locatorName: string) {
        console.log("''''''''''''''''''''''''''''''''''");
        console.log(this.createCustomLocator.arguments);
        console.log("''''''''''''''''''''''''''''''''''");
        protractor.by.addLocator(locatorName,
            function (expected, parentElement) {
                console.log("''''''''''''''''''''''''**********''''''''''''''''''''''''''''''''''1");
                let using = parentElement || document;
                console.log("''''''''''''''''''''''''**********''''''''''''''''''''''''''''''''''2");
                let nodes = using.querySelectorAll(`[data-reactid]`);
                return Array.prototype.filter.call(nodes, function (node) {
                    return (node.getAttribute(`data-reactid`) === expected);
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