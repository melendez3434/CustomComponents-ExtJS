Ext.define('CustomComponentExtJS.view.main.Main', {
    extend: 'Ext.form.Panel',
    requires: [
        'CustomUx.form.field.ComboIcon',
        'CustomUx.form.field.AceEditor'
    ],
    xtype: 'app-main',
    bodyPadding: 5,
    defaults: {
        labelAlign: 'right',
        anchor: '0'
    },
    items: [{
        xtype: 'comboicon'
    },{
        xtype: 'aceeditor',
        fieldLabel: 'Query'
    }]
});
