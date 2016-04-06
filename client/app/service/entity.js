import angular from 'angular';

import 'lodash'
import 'restangular'

angular.module("entityModule", [
  'restangular'
]).factory('Notes', ["Restangular", Restangular => {
  return Restangular.withConfig(config => {
    config.setBaseUrl("/api");
  }).service("notes");
}]);

module.exports = "entityModule";