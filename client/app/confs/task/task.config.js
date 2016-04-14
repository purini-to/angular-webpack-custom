export default function routing($urlRouterProvider, $locationProvider, $mdThemingProvider, RestangularProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/task/');

  $mdThemingProvider.theme('default')
    .primaryPalette('cyan')
    .accentPalette('blue-grey')
    .warnPalette('red');

  RestangularProvider.setBaseUrl('http://localhost:3000/api');
}

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$mdThemingProvider', 'RestangularProvider'];
