import './new.styl';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './new.routes';
import AccountNewCtrl from './new.ctrl';

export default angular.module('app.account.new', [uirouter])
  .config(routing)
  .controller('AccountNewCtrl', AccountNewCtrl)
  .name;
