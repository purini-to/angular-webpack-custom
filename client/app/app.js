import angular from 'angular';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngAnimate from 'angular-animate';
import ngMdIcons from 'angular-material-icons';

import 'lodash/lodash'
import 'restangular/dist/restangular'

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
  constructor($log, $mdSidenav, Notes) {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.$log = $log;
    this.$mdSidenav = $mdSidenav;
    this.Notes = Notes;
    this.getNotes();
  }

  getNotes() {
    this.Notes.getList().then(notes => {
      this.notes = notes;
    });
  }

  toggleSidenav() {
    this.$mdSidenav('nav').toggle()
      .then(() => this.$log.debug('toggle nav is done'));
  }

  closeSidenav() {
    this.$mdSidenav('nav').close()
      .then(() => this.$log.debug('close nav is done'));
  }

  addNote() {
    this.Notes.post(this.newNote).then(() => this.getNotes());
  }

  deleteNote(note) {
    note.remove().then(() => this.getNotes());
  }
}

AppCtrl.$inject = ['$log', '$mdSidenav', 'Notes'];

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ngMaterial, ngMessages, ngAnimate, ngMdIcons, 'restangular'])
  .directive('app', app)
  .factory('Notes', ["Restangular", Restangular => {
    return Restangular.withConfig(config => {
      config.setBaseUrl("/api");
    }).service("notes");
  }])
  .controller('AppCtrl', AppCtrl)
  .config(['$mdThemingProvider', function($mdThemingProvider) {
    $mdThemingProvider.theme('myAwesome')
      .primaryPalette('blue')
      .accentPalette('cyan')
      .warnPalette('red');
    $mdThemingProvider.setDefaultTheme('myAwesome');
  }]);

export default MODULE_NAME;