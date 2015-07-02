'use strict';

angular.module('ohmyshowApp.controllers', []);
angular.module('ohmyshowApp.services', []);

/**
 * @ngdoc overview
 * @name ohmyshowApp
 * @description
 * # ohmyshowApp
 *
 * Main module of the application.
 */
angular
  .module('ohmyshowApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'smart-table',
    'ngStorage',
    'angular-chartist',
    'ohmyshowApp.controllers',
    'ohmyshowApp.services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/details/:showId', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

