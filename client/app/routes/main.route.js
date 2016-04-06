import angular from 'angular';
import ngUiRouter from 'angular-ui-router';

import NoteCtrl from "views/note/note";

angular.module("mainRouteModule", [
  ngUiRouter
]).config(["$urlRouterProvider", $urlRouterProvider => {
  $urlRouterProvider.when("", "/");
}]).config(["$stateProvider", $stateProvider => {
  $stateProvider.state("home", {
    url: "/",
    template: require('views/home/home.jade'),
    css: require("views/home/home.styl")
  }).state("note", {
    url: "/note",
    template: require('views/note/note.jade'),
    controller: NoteCtrl,
    controllerAs: 'note'
  });
}]);

module.exports = "mainRouteModule";