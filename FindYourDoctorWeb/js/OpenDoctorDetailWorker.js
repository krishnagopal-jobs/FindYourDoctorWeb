/**
 * 
 */

var populateDoctorDetails = function(doctorDetailsPage, physicianId) {
    var time1 = new Date();
    var times = 0;
    while (!doctorDetailsPage.populateDoctorDetails) {
        setTimeout(function() {
            times++;
        }, 500);
    }
    doctorDetailsPage.populateDoctorDetails(physicianId);
    doctorDetailsPage.focus();
    console.log("Time taken for this openDoctorDetails:" + (new Date() - time1)
            + "  " + times);
};

//self.addEventListener("message", function(e) {
//
//    populateDoctorDetails(e.data.doctorDetailsPage, e.data.physicianId);
//
//}, false);

onmessage = function(e) {
    console.log('Worker alerting');
};