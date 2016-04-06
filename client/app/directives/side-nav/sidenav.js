import angular from 'angular';

class SideNavCtrl {

  constructor($log, $mdSidenav) {
    this.$log = $log;
    this.$mdSidenav = $mdSidenav;
  }

  close() {
    this.$mdSidenav("nav").close();
  }
}

SideNavCtrl.$inject = ['$log', '$mdSidenav'];

angular.module("sideNavModule", [])
  .directive("sideNav", [() => {
    return {
      restrict: "E",
      template: require("./sidenav.jade"),
      controller: SideNavCtrl,
      controllerAs: "sidenav",
      bindToController: true,
      scope: {}
    }
  }]);

module.exports = "sideNavModule";