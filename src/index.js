require('formdata-polyfill');
require('es6-promise').polyfill();

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let tabs = require('./parts/tabs'),
        timer = require('./parts/timer'),
        modal = require('./parts/modal'),
        form = require('./parts/form'),
        slider = require('./parts/slider'),
        calc = require('./parts/calc');

    tabs();
    timer();
    modal();
    form();
    slider();
    calc();
});


if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}