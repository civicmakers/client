'use strict';

angular.module('civicMakersClientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngMaterial',
  'config',
  'firebase',
  'angulartics', 
  'angulartics.google.analytics'
])
  .config(function ($routeProvider, $locationProvider, $analyticsProvider, ENV) {
    $routeProvider
    .when('/privacy-policy', {
        templateUrl: 'views/privacy-policy.html'
    })
    .otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
    if (ENV.name === 'development') {
        $analyticsProvider.developerMode(true);
    }
  });
