function populateDoctorDetails(physicianId) {

    var url = "FindPhysicianDetails.php?physicianId=" + urlParams['physicianId'];

    $.ajax({
        url : url,
        contentType : "application/json",
        success : function(responseText) {

            var result = JSON.parse(responseText);

            $("#name").text(
                    result.lastName + ',' + result.firstName + ' '
                            + result.middleInitial);

            var address = result.location.street + ' '
                    + result.location.suiteNumber + ' ';
            address += '<br/>' + result.location.city + ' '
                    + result.location.state + ' ' + result.location.zipCode;

            $("#address").html(address);
            
            $("#physicianId").val(result.physicianId);

            var specialities = result.specialities;
            var speciailitiesText = "";

            for (var i = 0; i < specialities.length; i++) {
                speciailitiesText += specialities[i].specialityName + "<br/>";
            }

            $("#specialities").html(speciailitiesText);

            $("#phoneNumber").text(result.location.phoneNumber);
            
            $("#educationalQualifications").kendoGrid({
                dataSource : {
                    data : result.educationalQualifications,
                    pageSize : 20
                },
                height : 100,
                groupable : false,
                sortable : true,
                columns : [ {
                    template : "<div>#:graduationDate#</div>",
                    field : "GraduationDate",
                    title : "Graduation Date"
                }, {
                    template : "<div>#:instituteName# </div>",
                    field : "instituteName",
                    title : "Institute Name"
                }, {
                    template : "<div>#:degree#</div>",
                    title : "Qualification"
                } ]
            });

            $("#acceptedInsurances").kendoGrid({
                dataSource : {
                    data : result.acceptedInsurances,
                    pageSize : 20
                },
                height : 100,
                groupable : false,
                sortable : true,
                columns : [ {
                    template : "<div>#:insuranceName#</div>",
                    field : "InsuranceName",
                    title : "Insurance Name"
                } ]
            });
            
            $("#patientReviews").kendoGrid({
                dataSource : {
                    data : result.patientReviews,
                    pageSize : 20
                },
                height : 100,
                groupable : false,
                sortable : true,
                columns : [ {
                    template : "<div>#:patientName#</div>",
                    field : "patientName",
                    title : "Patient Name"
                }, {
                    template : "<div>#:reviewDate#</div>",
                    field : "ReviewDate",
                    title : "Review Date"
                }, {
                    template : "<div>#:ratings#</div>",
                    field : "rating",
                    title : "Rating"
                }, {
                    template : "<div>#:comments#</div>",
                    field : "comments",
                    title : "Comments"
                } ]
            });
            
            $("#insuranceReviews").kendoGrid({
                dataSource : {
                    data : result.insuranceReviews,
                    pageSize : 20
                },
                height : 100,
                groupable : false,
                sortable : true,
                columns : [ {
                    template : "<div>#:insurance.insuranceName#</div>",
                    field : "InsuranceName",
                    title : "Insurance Name"
                }, {
                    template : "<div>#:reviewDate#</div>",
                    field : "ReviewDate",
                    title : "Review Date"
                }, {
                    template : "<div>#:ratings#</div>",
                    field : "Rating",
                    title : "Rating"
                }, {
                    template : "<div>#:comments#</div>",
                    field : "comments",
                    title : "Comments"
                } ]
            });

        },
        failure : function(result) {
            debugger;
        }
    });

}

function deletePhysician() {
    var physicianId = $("#physicianId").val();
    var url = "DeletePhysician.php?physicianId=" + physicianId;
    $.ajax({
        url : url,
        success : function(result){
            $("#mainBody").text("The physician details have been deleted.");
        }
    });
}