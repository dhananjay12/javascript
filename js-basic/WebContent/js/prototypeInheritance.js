function Person(fname, lname, age) {
	this.firstname = fname;
	this.lastname = lname;
	this.age = age;
}
Person.prototype.getFullName = function() {
	return this.firstname + " " + this.lastname;
};

function Employee(fname, lname, age, position) {
	Person.call(this, fname, lname, age);
	this.position = position;
}
Employee.prototype = new Person();
Employee.prototype.getFullName=function() {
	var fullName=Person.prototype.getFullName.call(this);
	return fullName +", " + this.position;
};
var employee1 = new Employee("Jane", "Doe", 26, "programmer");
alert(employee1.getFullName());


/*var person1 = new Person("John", "Doe", 26);
alert(person1.getFullName());
person1.getFullName=function() {
	return this.firstname + " " + this.lastname+" from person1";
};

alert(person1.getFullName());*/