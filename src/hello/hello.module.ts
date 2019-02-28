/**
 *
 * (c) 2013-2019 Wishtack
 *
 */

import * as angular from 'angular';

export const helloModule = angular.module('hello', []);

helloModule.component('wtHello', {
    template: '<div>Hello</div>',
    controller: angular.noop
});
