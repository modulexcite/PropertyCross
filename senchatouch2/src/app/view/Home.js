﻿Ext.define('PropertyCross.view.Home', {
    extend: 'Ext.Container',
    xtype: 'home',
    requires: ['Ext.form.Panel', 'Ext.form.FieldSet', 'Ext.field.Text',
            'PropertyCross.view.SearchesListItem', 'PropertyCross.view.SuggestedLocationsListItem'],
    config: {
        id: 'home',
        title: 'PropertyCross',
        scrollable: true,
        items: [
            {
                html: 'Use the form below to search for houses to buy. You can search by ' +
                        'place-name, postcode, or click \'My location\', to search in your current location!',
                margin: 10
            },
            {
                xtype: 'formpanel',
                scrollable: null,
                margin: 10,
                items: [
                    {
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Location',
                                /*
                                 * On small iOS 7 screens, default labelWidth of '30%' is too small
                                 */
                                labelWidth: 'auto',
                                name: 'place_name',
                                id: 'placeNameText'
                            }
                        ],
                        margin: 10
                    },
                    {
                        layout: 'hbox',
                        margin: 10,
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            {
                                xtype: 'button',
                                id: 'goButton',
                                ui: 'normal',
                                text: 'Go'
                            },
                            {
                                xtype: 'button',
                                id: 'currLocationButton',
                                ui: 'action',
                                text: 'My Location'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'errorMessage',
                margin: '0 0 10 10',
                hidden: 'true'
            },
            {
                html: 'Previous Searches:',
                margin: 10,
                hidden: 'true',
                id: 'listTitleLabel'
            },
            {
                padding: '0 10 10',
                xtype: 'dataview',
                id: 'previousSearches',
                scrollable: null,
                store: 'searches',
                defaultType: 'searcheslistitem',
                useComponents: true
            },
            {
                xtype: 'dataview',
                padding: '0 10 10',
                hidden: 'true',
                ui: 'round',
                id: 'suggestedLocations',
                scrollable: null,
                store: {
                    fields: ['place_name', 'long_title']
                },
                itemTpl: '{long_title}',
                defaultType: 'suggestedlocationslistitem',
                useComponents: true
            }
        ]
    }
});
