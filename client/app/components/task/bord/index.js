import './bord.styl';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './bord.routes';
import TaskBordCtrl from './bord.ctrl';

export default angular.module('app.task.bord', [uirouter])
  .config(routing)
  .controller('TaskBordCtrl', TaskBordCtrl)
  .name;
