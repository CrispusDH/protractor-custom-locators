'use strict';

module.exports = function (ptor) {
    ptor.by.addLocator('dataTestId',
        function (dataTestId, parentElement) {
        var using = parentElement || document;
        var nodes = using.querySelectorAll('[data-test-id]');
        return Array.prototype.filter.call(nodes, function(node) {
            return (node.getAttribute('data-test-id') === dataTestId);
        });
    })
};