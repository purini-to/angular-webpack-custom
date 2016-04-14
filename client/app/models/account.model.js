import angular from 'angular';
import _ from 'lodash';


const REF_PREFIX = 'accounts';

class AccountModel {
  constructor(Restangular) {
    this.$ref = Restangular;

    this.account = {};
    this.auth = {};
  }

  save(account) {
    return this.$ref.all(REF_PREFIX).post(account).catch(error => console.error(error));
  }

  login(email, password) {
    const data = {
      email: email,
      password: password
    };
    return this.$ref.all(REF_PREFIX).all('login').post(data)
      .then(setAuth.bind(this))
      .then(setRestangularWithConfig.bind(this))
      .then(filterAuthByUserId)
      .then(loadAccount.bind(this))
      .then(setAccount.bind(this))
      .catch(error => console.error(error));
  }
}

function setAuth(auth) {
  this.auth = auth;
  return auth;
}

function filterAuthByUserId(auth) {
  if (!auth || !auth.userId) throw new Error('not found auth by userId.');
  return auth.userId;
}

function setRestangularWithConfig(auth) {
  this.$ref = this.$ref.withConfig(RestangularConfigurer => {
    // Restangularを使用時にデフォルトパラメータとしてアクセストークンを自動で付与するように設定
    return RestangularConfigurer.setDefaultRequestParams({
      'access_token': auth.id
    });
  });
  return auth;
}

function loadAccount(userId) {
  return this.$ref.one(REF_PREFIX, userId).get();
}

function setAccount(account) {
  this.account = account;
  return account;
}

AccountModel.$inject = ['Restangular'];

export default angular.module('models.account', [])
  .service('AccountModel', AccountModel)
  .name;
