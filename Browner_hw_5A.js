
/*
Variables
	Container for a value
	eg. x=10
		x * 2 = 20

Debugging through Script output-3 ways
	Console
		js directly in console
		Print to console via .js file
			eg. console.log("My Content")

		Alerts: pop ups on screen
			eg. alert("hello world!"")

		Logging to html see hw_5.html
	

Different data types
	String - text inside quotes

	Numbers - 5, 5.5, 1000

	Boolean - true, false

	Undefined - no value

Testing
	=== Equal
	!== Not Equal

	Recognizes < > signs too


Functions*/

//single line comments

$(document).ready(function() {
	alert("Hello World!");

	//array
	["Julia", "Julie", "Jamie", "James"];
	[2, 5, 85, 45];
	[2, 5, 85, "James"];

	//Stored in a Variables
	var names = ["Julia", "Julie", "Jamie", "James"];

	//multi dimensional
	var names = ["Julia", "Julie", "Jamie", "James"];
	var cities = ["portland", "new york", "austin", "denver"];
	var combined = [names, cities];

	//Logic - True or False
	5===5
	//equals must use three or will not check the object type
	5!==five
	//not equals
	5<=10
	10>=5
	5<10
	10>5

	//if statement allows you to run code if a test is true
	if(5>10){
		console.log("you'll never see because 5 is never greater than 10");
	}

	if(5<10){
		console.log("you will see this");
	}

	//else statement runs if the "if" statement is false
	if(5>10){
		console.log("you'll never see because 5 is never greater than 10");
	} else{
		console.log("you will see this as the first argument is false");
		}

	//else if allows you to run a third argument
	if(5>10){
		console.log("you'll never see because 5 is never greater than 10");
	} else if (5===5){
		console.log("yes you see this in console as 5 equals 5");
	} else{
		console.log("you will see this as the first argument is false");
		}


	)};
