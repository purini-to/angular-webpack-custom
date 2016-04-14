import _ from 'lodash';

export default class AccountNewCtrl {
  constructor($mdMedia, $state, AccountModel) {
    this.$mdMedia = $mdMedia;
    this.AccountModel = AccountModel;
    this.$state = $state;

    this.account = {
      last: '',
      first: '',
      email: '',
      password: '',
      passwordCon: ''
    };
  }

  save() {
    const account = _.omit(this.account, 'passwordCon');
    this.AccountModel.save(account).then(account => this.$state.go('account'));
  }
}

AccountNewCtrl.$inject = ['$mdMedia', '$state', 'AccountModel'];
