Ext.define('Register.view.RegistrationView', {

	extend : 'Ext.form.Panel',
	alias : 'widget.regForm',
	title : 'Registration',
	padding : '10,0,0,10',// Top, right, bottom, left
	items : [ {
		xtype : 'textfield',
		name : 'fname',
		fieldLabel : 'First Name',
		padding : '5,0,0,10',// Top, right, bottom, left
		allowBlank : false,
		vtype : 'alpha'
	}, {
		xtype : 'textfield',
		name : 'lname',
		fieldLabel : 'Last Name',
		padding : '5,0,0,10',
		allowBlank : false,
		vtype : 'alpha'
	}, {
		xtype : 'textfield',
		name : 'email',
		fieldLabel : 'Email',
		padding : '5,0,0,10',
		allowBlank : false,
		vtype : 'email'
	}, {
		xtype : 'datefield',
		fieldLabel : 'DOB',
		name : 'dateOfBirth',
		allowBlank : false,
		padding : '5,0,0,10',
		editable : false
	} ],
	buttons : [ {
		text : 'Submit',
		action : 'register'
	}, {
		text : 'Reset',
		handler : function() {
			this.up('form').getForm().reset();
		}
	} ]
});