export default function routes($stateProvider) {
  $stateProvider
    .state('account', {
      url: '/account/login',
      template: require('./login.jade'),
      controller: 'AccountLoginCtrl',
      controllerAs: 'vm',
    });
}

routes.$inject = ['$stateProvider'];
