$(function() {
	// JSON data array
	var employees = [ {
		"Name" : "John",
		"Age" : "20"
	}, {
		"Name" : "Ann",
		"Age" : "15"
	}, {
		"Name" : "Peter",
		"Age" : "60"
	} ];
	// bind the data with tbody
	for (var i = 0; i < employees.length; i++) {
		$("#rows").append(
				"<tr><td>" + employees[i].Name + "</td><td>"
						+ employees[i].Age + "</td></tr>");
		// please use the following line if the table is dynamically generated
		// one
		// $("#demoTable").trigger("update");

	}

});

