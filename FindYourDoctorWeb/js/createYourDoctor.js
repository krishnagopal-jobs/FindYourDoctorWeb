function createPhysician(inputForm) {

	var data = {
		"firstName" : inputForm['firstName'].value,
		"lastName" : inputForm['lastName'].value,
		"middleInitial" : inputForm['middleInitial'].value,
		"location" : {
			"street" : inputForm['street'].value,
			"suiteNumber" : inputForm['suiteNumber'].value,
			"city" : inputForm['city'].value,
			"state" : inputForm['state'].value,
			"zipCode" : inputForm['zipCode'].value
		}
	}

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		}
	};
	
	console.log(JSON.stringify(data));
	
	xhttp.open("POST", "CreatePhysian.php", true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	xhttp.send(JSON.stringify(data));
}