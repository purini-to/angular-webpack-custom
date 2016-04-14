export default function routes($stateProvider) {
  $stateProvider
    .state('task', {
      url: '/task/',
      template: require('./bord.jade'),
      controller: 'TaskBordCtrl',
      controllerAs: 'vm',
    });
}

routes.$inject = ['$stateProvider'];
