Ext.define('CustomUx.form.field.ComboIcon', {
    extend: 'Ext.form.field.Tag',
    xtype: 'comboicon',
    fieldLabel: 'Icon',
    multiSelect: false,
    cls: 'combo-icon',
    store: [
        ['comments', 'comments'],
        ['home', 'home'],
        ['check', 'check'],
        ['laptop', 'laptop'],
        ['phone', 'phone']
    ],
    tpl: [
        '<ul class="x-list-plain"><tpl for=".">',
            '<li role="option" class="x-boundlist-item"><span class="x-fa fa-{field1}"> {field2}</span></li>',
        '</tpl></ul>'
    ],
    multiSelectItemTpl: [
        '<tpl for=".">',
            '<li data-selectionIndex="{[xindex - 1]}" data-recordId="{internalId}" role="presentation" class="x-tagfield-item',
            '{%',
                'values = values.data;',
            '%}',
            '">',
            '<div role="presentation" class="x-tagfield-item-text"><span class="x-fa fa-{field1}"> {field2}<span></div>',
            '<div role="presentation" class="x-tagfield-item-close"></div>',
            '</li>',
        '</tpl>'
    ],
    ariaListItemTpl: [],
    ariaSelectedItemTpl: [],

    getValue: function() {
        var value = this.callParent(arguments) || [];
        return value[0];
    }
});