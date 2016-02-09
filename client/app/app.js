'use strict';

angular.module('civicMakersClientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngMaterial',
  'firebase',
  'angulartics', 
  'angulartics.google.analytics'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/privacy-policy', {
        templateUrl: 'views/privacy-policy.html'
    })
    .otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
  });
