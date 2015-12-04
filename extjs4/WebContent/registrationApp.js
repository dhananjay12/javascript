Ext.application({
	requires : [ 'Ext.container.Viewport' ],
	name : 'Register',
	appFolder : 'registrationApp',
	controllers: ['RegistrationController'],
	autoCreateViewport: true,
	launch : function() {
		console.log('Registration App launch');
	}
});