import angular from 'angular';

class TopBarCtrl {

  constructor($log, $mdSidenav) {
    this.$log = $log;
    this.$mdSidenav = $mdSidenav;
  }

  openSideNav() {
    this.$mdSidenav("nav").toggle();
  }
}

TopBarCtrl.$inject = ['$log', '$mdSidenav'];

angular.module("topBarModule", [])
  .directive("topBar", [() => {
    return {
      restrict: "E",
      template: require("./topbar.jade"),
      controller: TopBarCtrl,
      controllerAs: "topbar",
      bindToController: true,
      scope: {}
    };
  }]);

module.exports = "topBarModule";