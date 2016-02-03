let patientsService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/patient';

  let vm = this;

  vm.getPatients = getPatients;

  function getPatients() {
    return $http.get(url, PARSE.CONFIG);
  }

};

patientsService.$inject = ['$http', 'PARSE'];

export default patientsService;