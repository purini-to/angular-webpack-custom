export default function routes($stateProvider) {
  $stateProvider
    .state('accountNew', {
      url: '/account/new',
      template: require('./new.jade'),
      controller: 'AccountNewCtrl',
      controllerAs: 'vm',
    });
}

routes.$inject = ['$stateProvider'];
