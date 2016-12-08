function populateSpecialities(specialitysSelect) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var selectionElets = JSON.parse(this.responseText).specialities;
			for (var index = 0; index < selectionElets.length; index++) {
				var value = selectionElets[index]["specialityId"];
				var text = selectionElets[index]["specialityName"];
				specialitysSelect.options[specialitysSelect.options.length] = new Option(text, value);
			}

		}
	};
	xhttp.open("GET", "FindSpecialites.php", true);
	//xhttp.open("GET", "http://localhost:8080/findYourDoctor/specialities/", true);
	xhttp.send();
}