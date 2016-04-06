import angular from 'angular';
import ngMaterial from 'angular-material';

angular.module("themeModule", [
  ngMaterial
]).config(['$mdThemingProvider', function ($mdThemingProvider) {
  $mdThemingProvider.theme('myAwesome')
    .primaryPalette('blue')
    .accentPalette('cyan')
    .warnPalette('red');
  $mdThemingProvider.setDefaultTheme('myAwesome');
}]);

module.exports = "themeModule";