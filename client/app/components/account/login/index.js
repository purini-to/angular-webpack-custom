import './login.styl';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './login.routes';
import AccountLoginCtrl from './login.ctrl';

export default angular.module('app.account.login', [uirouter])
  .config(routing)
  .controller('AccountLoginCtrl', AccountLoginCtrl)
  .name;
