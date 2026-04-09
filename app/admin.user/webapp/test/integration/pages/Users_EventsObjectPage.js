sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'admin.user',
            componentId: 'Users_EventsObjectPage',
            contextPath: '/Users/events'
        },
        CustomPageDefinitions
    );
});