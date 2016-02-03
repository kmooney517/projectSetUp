let patientsController = function(patientsService) {
  
  let vm = this;

  vm.getPatientList = getPatientList;
  vm.getPatient = getPatient;


  vm.patientList = [];

  getPatientList();
  function getPatientList() {
    patientsService.getPatients().then(function(res) {
      console.log(res);
      let x = res.data.results;
        console.log(x);
        x.forEach(function(patient){
          vm.patientList.push(patient);
        });
    });
  }

  function getPatient (patient) {
    console.log(patient);
    vm.currentPatient = patient.name;
    vm.t1q1           = patient.t1q1;
    vm.t1q2           = patient.t1q2;
    vm.t1q3           = patient.t1q3;
    vm.t2q1           = patient.t2q1;
    vm.t2q2           = patient.t2q2;
    vm.t2q3           = patient.t2q3;
    vm.t3q1           = patient.t3q1;
    vm.t3q2           = patient.t3q2;
    vm.t3q3           = patient.t3q3;

  }

};

patientsController.$inject = ['patientsService'];

export default patientsController;