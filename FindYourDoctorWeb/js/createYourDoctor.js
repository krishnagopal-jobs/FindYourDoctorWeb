function createPhysician(inputForm) {

	var specialityIds = getSelectValues( inputForm['specialityId'] );
	var specialities = [];
	
	for(var i = 0; i < specialityIds.length; i++) {
		var speciality = {
			"specialityId" : specialityIds[i]	
		}
		specialities.push(speciality);
	}

	var data = {
		"firstName" : inputForm['firstName'].value,
		"lastName" : inputForm['lastName'].value,
		"middleInitial" : inputForm['middleInitial'].value,
		"specialities" : specialities,
		"location" : {
			"street" : inputForm['street'].value,
			"suiteNumber" : inputForm['suiteNumber'].value,
			"city" : inputForm['city'].value,
			"state" : inputForm['state'].value,
			"zipCode" : inputForm['zipCode'].value,
			"phoneNumber" : inputForm['phoneNumber'].value
		}
	}

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		}
	};

	console.log(JSON.stringify(data));

	xhttp.open("POST", "CreatePhysician.php", true);
	//xhttp.open("POST", "http://localhost:8080/findYourDoctor/physicians/", true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	xhttp.send(JSON.stringify(data));
}

// Return an array of the selected opion values
// select is an HTML select element
function getSelectValues(select) {
	var result = [];
	var options = select && select.options;
	var opt;

	for (var i = 0, iLen = options.length; i < iLen; i++) {
		opt = options[i];

		if (opt.selected && typeof opt.value != 'undefined' && opt.value != ''
				&& opt.value != null) {
			result.push(opt.value);
		}
	}
	return result;
}