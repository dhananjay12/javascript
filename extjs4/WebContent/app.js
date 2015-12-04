Ext.application({
	requires : [ 'Ext.container.Viewport' ],
	name : 'EmpDetails',
	appFolder : 'employeeListFolder',
	controllers: ['EmployeeController'],
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			layout : 'fit',
			items : [
			{
				xtype : 'emplist'
			}
			]
		});
	}
});