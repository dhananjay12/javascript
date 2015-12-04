
function getPerson(fname, lname) {
	var fullName = "Hello " + fname + " " + lname;
	return fullName;
}
var x = getPerson("John", "Doe");
alert(x);

var person = {fname:"John", lname:"Doe", age:25}; 

var text = "";
for (var x in person) {
    text += person[x];
}
alert(text);


/*//declaring function
function getPerson(fname, lname) {
	var fullName = "Hello " + fname + " " + lname;
	return fullName;
}
var x = getPerson("John", "Doe");
alert(x);*/



/*//function to assigning to a variable
var getPerson = function(fname, lname) {
	var fullName = "Hello " + fname + " " + lname;
	return fullName;
};
var x = getPerson("John", "Doe");
alert(x);*/

/*//function returning a function
var getPerson = (function() {
	return function(fname, lname) {
		var fullName = "Hello " + fname + " " + lname;
		return fullName;
	};
}());
var x = getPerson("John", "Doe");
alert(x);*/
