var populateSpecialities = function(specialitysSelect) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var selectionElets = JSON.parse(this.responseText).specialities;
            for (var index = 0; index < selectionElets.length; index++) {
                var value = selectionElets[index]["specialityId"];
                var text = selectionElets[index]["specialityName"];
                specialitysSelect.options[specialitysSelect.options.length] = new Option(
                        text, value);
            }

        }
    };
    xhttp.open("GET", "FindSpecialites.php", true);
    // xhttp.open("GET",
    // "http://localhost:8080/findYourDoctor/specialities/",true);
    xhttp.send();
}

var openDoctorDetails = function(physicianId) {
    var doctorDetailsPage = window.open('PhysicianDetails.html?physicianId='+physicianId, '_blank',
            'resizable=yes; width=1000; height=1500; top=50; left=50');
};

var getPhysicianDetails = function(form) {

    var url = "FindPhysicians.php?";
    // var url = "http://localhost:8080/findYourDoctor/physicians?";

    if ($("#firstName").val().length != 0) {
        url += "&firstName=" + $("#firstName").val();
    }
    if ($("#lastName").val().length != 0) {
        url += "&lastName=" + $("#lastName").val();
    }
    if ($("#zipCode").val().length != 0) {
        url += "&zipCode=" + $("#zipCode").val();
    }
    if ($("#city").val().length != 0) {
        url += "&city=" + $("#city").val();
    }
    if ($("#specialityId").val().length != 0 && $("#specialityId").val() != 0) {
        url += "&specialityId=" + $("#specialityId").val();
    }
    $
            .ajax({
                url : url,
                contentType : "application/json",
                success : function(result) {
                    $("#PhysiciansDiv")
                            .kendoGrid(
                                    {
                                        dataSource : {
                                            data : JSON.parse(result).data,
                                            pageSize : 20
                                        },
                                        height : 550,
                                        groupable : false,
                                        sortable : true,
                                        pageable : {
                                            refresh : true,
                                            pageSizes : true,
                                            buttonCount : 5
                                        },
                                        change : function(e) {
                                            var selectedRows = this.select();
                                            var selectedDataItems = [];
                                            for (var i = 0; i < selectedRows.length; i++) {
                                                var dataItem = this
                                                        .dataItem(selectedRows[i]);
                                                selectedDataItems
                                                        .push(dataItem);
                                            }
                                        },
                                        columns : [
                                                {
                                                    template : "<a href=\"javascript:openDoctorDetails(#:physicianId#)\">#:lastName#, #:firstName# </a>",
                                                    field : "Name",
                                                    title : "Name",
                                                    width : 240
                                                },
                                                {
                                                    template : "<div>#:location.street# #:location.suiteNumber#, #:location.city#, #:location.zipCode# </div>",
                                                    title : "Address",
                                                    field : "address"
                                                },
                                                {
                                                    template : "<div>#:location.street# #:location.suiteNumber#</div>",
                                                    title : "Street",
                                                    field : "Street"
                                                },
                                                {
                                                    template : "<div>#:location.city# </div>",
                                                    title : "City",
                                                    field : "City"
                                                },
                                                {
                                                    template : "<div>#:location.zipCode# </div>",
                                                    title : "Zip Code",
                                                    field : "ZipCode"
                                                },
                                                {
                                                    template : "<div>#:specialities[0].specialityName# </div>",
                                                    title : "Speciality",
                                                    field : "specialityName"
                                                } ]
                                    });
                },
                failure : function(result) {
                    debugger;
                }
            });
}
