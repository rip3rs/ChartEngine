const angular = require('angular');
const aria = require('angular-aria');
const ngMaterial = require('angular-material');
const ChartEngine = angular.module('chartEngine', ['ngMaterial']);
const moment = require('moment');

ChartEngine.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

ChartEngine.config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function(date) {
       return moment(date).format('DD-MM-YYYY');
    };
});

module.exports = ChartEngine;