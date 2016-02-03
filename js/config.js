let config = function($urlRouterProvider, $stateProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: './views/layout.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'controller as vm'
    })
    .state('root.patients', {
      url: '/patients',
      templateUrl: './views/patients.html',
      controller: 'patientsController as vm'
    })
  ;

};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;