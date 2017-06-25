'use strict';

module.exports = function (ptor) {
    ptor.by.addLocator('dataTestId',
        function (dataTestId: string, parentElement: HTMLElement | null | Document) {
        let parentElement = parentElement || document;
        let nodes = parentElement.querySelectorAll('[data-test-id]');
        return Array.prototype.filter.call(nodes, function(node) {
            return (node.getAttribute('data-test-id') === dataTestId);
        });
    })
};