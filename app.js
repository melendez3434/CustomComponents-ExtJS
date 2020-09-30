/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'CustomComponentExtJS.Application',

    name: 'CustomComponentExtJS',

    requires: [
        // This will automatically load all classes in the CustomComponentExtJS namespace
        // so that application classes do not need to require each other.
        'CustomComponentExtJS.*'
    ],

    // The name of the initial view to create.
    mainView: 'CustomComponentExtJS.view.main.Main'
});
