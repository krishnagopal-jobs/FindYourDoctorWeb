

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
		//xhttp.open("GET", "FindSpecialites.php", true);
		xhttp.open("GET", "http://localhost:8080/findYourDoctor/specialities/",true);
		xhttp.send();
	}


	var getPhysicianDetails = function(form) {

		//var url = "CreatePhysician.php?";
		var url = "http://localhost:8080/findYourDoctor/physicians?";

		if ($("#firstName").val().length != 0) {
			url += "&firstName=" + $("#firstName").val();
		}
		if ($("#lastName").val().length != 0) {
			url += "&lastName=" + $("#lastName").val();
		}
		if ($("#zipCode").val().length != 0) {
			url += "&zipCode=" + $("#zipCode").val();
		}
		if ($("#specialityId").val().length != 0
				&& $("#specialityId").val() != 0) {
			url += "&specialityId=" + $("#specialityId").val();
		}
		$.ajax({
			url : url,
			contentType : "application/json",
			success : function(result) {
			    $("#PhysiciansDiv").jsGrid({
			        width: "100%",
			        height: "400px",
			 
			        inserting: true,
			        editing: true,
			        sorting: true,
			        paging: true,
			 
			        data: result.data,
			 
			        fields: [
			            { name: "firstName", type: "text", width: 150, validate: "required" },
			            { name: "lastName", type: "text", width: 150, validate: "required" },
			            { name: "location.city", title:"City", type: "text", width: 150, validate: "required" },
			            { name: "location.zipCode", title:"Zip Code", type: "text", width: 200 },
			            { name: "specialities.0.specialityName", title: "Speciality", type: "text", width: 200 }
			        ]
			    });
			},
			failure : function(result) {
				debugger;
			}
		});
	}

	
