import _ from 'lodash';

export default class AccountLoginCtrl {
  constructor($mdMedia, $state, AccountModel) {
    this.$mdMedia = $mdMedia;
    this.account = {
      email: '',
      password: '',
    };
    this.AccountModel = AccountModel;
  }

  login() {
    this.AccountModel.login(this.account.email, this.account.password)
      .then(account => console.log(account));
  }
}

AccountLoginCtrl.$inject = ['$mdMedia', '$state', 'AccountModel'];
