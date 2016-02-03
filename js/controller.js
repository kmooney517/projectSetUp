let controller = function(service, $scope) {
  
  let vm = this;

  vm.submit = submit;

  function submit(patient) {
    if (patient.t1q1 === undefined) {
      patient.t1q1 = false;
    }
    if (patient.t1q2 === undefined) {
      patient.t1q2 = false;
    }
    if (patient.t1q3 === undefined) {
      patient.t1q3 = false;
    }
    if (patient.t2q1 === undefined) {
      patient.t2q1 = false;
    }
    if (patient.t2q2 === undefined) {
      patient.t2q2 = false;
    }
    if (patient.t2q3 === undefined) {
      patient.t2q3 = false;
    }
    if (patient.t3q1 === undefined) {
      patient.t3q1 = false;
    }
    if (patient.t3q2 === undefined) {
      patient.t3q2 = false;
    }
    if (patient.t3q3 === undefined) {
      patient.t3q3 = false;
    }

    service.addPatient(patient).then(function(res) {
      console.log(res);
    });

    $scope.patient = {};
  }




};

controller.$inject = ['service', '$scope'];

export default controller;