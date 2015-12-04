Ext.define('EmpDetails.view.EmployeeView', {

	extend : 'Ext.grid.Panel',
	alias : 'widget.emplist',
	title : 'Employees List',
	store : 'EmployeeStore',
	columns : [ {
		text : 'Name',
		dataIndex:'name',
		flex : 2
	}, {
		text : 'Email',
		dataIndex:'email',
		flex : 1
	}, {
		text : 'Phone',
		dataIndex:'phone',
		flex : 1
	} ]
});