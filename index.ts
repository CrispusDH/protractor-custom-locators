import {Ptor} from "protractor";

export default class AddCustomLocators {

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