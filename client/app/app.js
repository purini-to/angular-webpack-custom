import angular from 'angular';
import agMaterial from 'angular-material';
import agAnimate from 'angular-animate';
import agMdIcons from 'angular-material-icons';

import 'angular-material/angular-material.css';
import '../style/app.styl';

let app = () => {
  return {
    template: require('./app.jade'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor($log, $mdSidenav) {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.$log = $log;
    this.$mdSidenav = $mdSidenav;
  }

  toggleSidenav() {
    this.$mdSidenav('nav').toggle()
      .then(() => {
        this.$log.debug('toggle nav is done');
      });
  }

  closeSidenav() {
    this.$mdSidenav('nav').close()
      .then(() => {
        this.$log.debug('close nav is done');
      });
  }
}

AppCtrl.$inject = ['$log', '$mdSidenav'];

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [agMaterial, agAnimate, agMdIcons])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .config(['$mdThemingProvider', function($mdThemingProvider) {
    $mdThemingProvider.theme('myAwesome')
      .primaryPalette('blue')
      .accentPalette('cyan')
      .warnPalette('red');
    $mdThemingProvider.setDefaultTheme('myAwesome');
  }]);

export default MODULE_NAME;