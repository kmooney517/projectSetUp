// import $ from 'jquery';
import 'bootstrap-sass';

import angular from 'angular';
import 'angular-ui-router';

import config from './config';
import controller from './controller';
import patientsController from './patientsController'
import service from './service';
import patientsService from './patientsService';
import PARSE from './constant';

angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('controller', controller)
  .controller('patientsController', patientsController)
  .service('service', service)
  .service('patientsService', patientsService)
  .constant('PARSE', PARSE)
;