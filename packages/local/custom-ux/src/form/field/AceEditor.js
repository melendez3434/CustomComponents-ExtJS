Ext.define('CustomUx.form.field.AceEditor', {
    extend: 'Ext.form.field.Base',
    xtype: 'aceeditor',
    fieldLabel: 'ACE Editor',
    mode: 'ace/mode/sql',
    height: 200,
    value: '',
    lastValue: '',
    readOnlyEditor: true,
    fieldSubTpl: [
        '<div class="ace-editor">',
            '<div class="ace-editor-button-code" style="display: {displayButtonCode}"><span class="x-fa fa-code"></span></div>',
            '<div id="{editorId}" style="height: {height}px"></div>',
        '</div>'
    ],
    
    afterRender: function() {
        var me = this;
            
        me.editorId = me.getId() + '-editor';
        me.editor = ace.edit(me.editorId);
        me.editor.getSession().setMode(me.mode);
        me.editor.getSession().setValue(me.getValue());
        
        me.editor.getSession().on('change', function() {
            me.onChange.call(me);
        }, me);

        if(me.readOnlyEditor) {
            me.editor.setOptions({
                showGutter: false,
                highlightActiveLine: false,
                readOnly: true
            });

            me.winEditor = Ext.create({
                xtype: 'window',
                title: 'Editor',
                height: 600,
                width: 800,
                resizable: false,
                layout: 'fit',
                closeAction: 'hide',
                items: {
                    xtype: 'aceeditor',
                    hideLabel: true,
                    height: 500,
                    readOnlyEditor: false,
                    itemId: 'textAreaEditor'
                },
                bbar: ['->', {
                    text: 'Save',
                    scope: me,
                    handler: me.onSaveEditor
                },{
                    text: 'Cancel',
                    scope: me,
                    handler: me.onCancelEditor
                }]
            });

            me.getEl().on('click', me.onElClick, me);
        }
    },

    onSaveEditor: function() {
        var me = this;

        me.setValue(me.winEditor.down('#textAreaEditor').getValue());
        me.winEditor.close();
    },

    onElClick: function(evt) {
        var me = this;

        if(!evt.getTarget('.fa-code')){
            return;
        }

        me.winEditor.show();
        me.winEditor.down('#textAreaEditor').setValue(me.getValue(), 1);
    },

    onCancelEditor: function() {
        this.winEditor.close();
    },
    
    onChange: function() {
        var me = this;

        me.lastValue = me.value;
        me.value = me.editor.getSession().getValue();
        me.fireEvent('change', me, me.value, me.lastValue);
        me.callParent([me.value, me.lastValue]);
    },
    
    getSubTplData: function(data) {
        var me = this;

        Ext.apply(data || {}, {
            editorId: me.getId() + '-editor',
            height: me.height,
            displayButtonCode: me.readOnlyEditor ? 'inherit' : 'none'
        });
        
        return data;
    },

    getValue: function() {
        return this.value;
    },
    
    getSubmitValue: function() {
        return this.getValue();
    },

    setValue: function(value) {
        var editor = this.editor;

        this.value = value;
        editor && editor.getSession().setValue(value, 1);
    }
});