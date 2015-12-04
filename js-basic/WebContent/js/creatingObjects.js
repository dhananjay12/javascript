var person1 = new Object();
person1.firstname = "John";
person1.lastname = "Doe";
person1.age = 25;
var text = "";
for ( var x in person1) {
	text += person1[x];
}
alert(text);// will return JohnDoe25
var person2 = {
	firstname : "Jane",
	lastname : "Doe",
	age : 25,

	getFullName : function() {
		return this.firstname + " " + this.lastname;
	}
};
alert(person2.getFullName());// will return Jane Doe

function Person(fname, lname, age) {
	this.firstname = fname;
	this.lastname = lname;
	this.age = age;
	this.getFullName = function() {
		return this.firstname + " " + this.lastname;
	};
}
var person3 = new Person("John", "Doe", 26);
alert(person3.getFullName());//will return John Doe