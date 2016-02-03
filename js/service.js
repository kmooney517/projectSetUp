let service = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/patient'

  let vm = this;

  vm.addPatient = addPatient;


  function NewPatient(patient) {
    this.name = patient.name;

    this.t1q1 = patient.t1q1;
    this.t1q2 = patient.t1q2;
    this.t1q3 = patient.t1q3;

    this.t2q1 = patient.t2q1;
    this.t2q2 = patient.t2q2;
    this.t2q3 = patient.t2q3;

    this.t3q1 = patient.t3q1;
    this.t3q2 = patient.t3q2;
    this.t3q3 = patient.t3q3;

    // this.t4q1 = patient.t4q1;
    // this.t4q2 = patient.t4q2;
    // this.t4q3 = patient.t4q3;

    // this.t5q1 = patient.t5q1;
    // this.t5q2 = patient.t5q2;
    // this.t5q3 = patient.t5q3;

    // this.t6q1 = patient.t6q1;
    // this.t6q2 = patient.t6q2;
    // this.t6q3 = patient.t6q3;

    // this.t7q1 = patient.t7q1;
    // this.t7q2 = patient.t7q2;
    // this.t7q3 = patient.t7q3;


  }


  function addPatient(patient) {
    let p = new NewPatient(patient); 
    return $http.post(url, p, PARSE.CONFIG);
  }

};

service.$inject = ['$http', 'PARSE'];

export default service;