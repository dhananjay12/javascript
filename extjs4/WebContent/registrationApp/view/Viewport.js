Ext.define('Register.view.Viewport', {
	extend : 'Ext.container.Viewport',
	layout: {
        type: 'border'
    },
	items : [  {
        region: 'north',
        margins: '0 0 5 0',
        title:'Header (north region)',
        height: 50,
        html:'Header information goes here'
    }, {
        region: 'west',
        title: 'Left bar (west region)',
        width: 150,
        html:'Navigation goes here'
    },{
    	region: 'center',
		xtype : 'regForm'
		
	},{
        region: 'south',
        title: 'Footer (south region)',
        html: 'Footer Information goes here',
        height: 50
            
    } ]
});