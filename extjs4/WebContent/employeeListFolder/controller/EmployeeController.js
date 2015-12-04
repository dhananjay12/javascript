Ext.define('EmpDetails.controller.EmployeeController', {

	extend : 'Ext.app.Controller',
	views : [ 'EmployeeView' ],
	stores:['EmployeeStore'],

	init : function() {
		console.log('Controller InIt');
	}

});