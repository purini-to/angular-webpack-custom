import _ from 'lodash';

export default class TaskBordCtrl {
  constructor($mdMedia, $state, AccountModel) {
    this.$mdMedia = $mdMedia;
    this.AccountModel = AccountModel;
  }
}

TaskBordCtrl.$inject = ['$mdMedia', '$state', 'AccountModel'];
