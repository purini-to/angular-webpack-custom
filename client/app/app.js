import angular from 'angular';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngAnimate from 'angular-animate';
import ngMdIcons from 'angular-material-icons';

import theme from "conf/theme";
import mainRoute from "routes/main.route.js";

import sideNav from "directives/side-nav/sidenav";
import topBar from "directives/top-bar/topbar";

import entity from "service/entity";

import 'angular-material/angular-material.css';
import '../style/app.styl';

angular.module("app", [
  ngMaterial,
  ngMessages,
  ngAnimate,
  ngMdIcons,
  theme,
  entity,
  mainRoute,
  sideNav,
  topBar
]);

export default "app";