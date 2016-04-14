import 'normalize.css/normalize.css';
import 'angular-material/angular-material.min.css'
import './app.styl';

import angular from 'angular';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngAnimate from 'angular-animate';
import ngMdIcons from 'angular-material-icons';
import ngUiRouter from 'angular-ui-router';
import 'restangular';

// config
import routing from './app.config';

// components
import AccountLoginCtrl from '../../components/account/login';
import AccountNewCtrl from '../../components/account/new';

// models
import AccountModel from '../../models/account.model';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  ngMaterial,
  ngMessages,
  ngAnimate,
  ngMdIcons,
  ngUiRouter,
  'restangular',
  AccountLoginCtrl,
  AccountNewCtrl,
  AccountModel
]).config(routing);

export default MODULE_NAME;
