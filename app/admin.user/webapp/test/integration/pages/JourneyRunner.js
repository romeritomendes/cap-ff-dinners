sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"admin/user/test/integration/pages/UsersList",
	"admin/user/test/integration/pages/UsersObjectPage",
	"admin/user/test/integration/pages/Users_EventsObjectPage"
], function (JourneyRunner, UsersList, UsersObjectPage, Users_EventsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('admin/user') + '/test/flp.html#app-preview',
        pages: {
			onTheUsersList: UsersList,
			onTheUsersObjectPage: UsersObjectPage,
			onTheUsers_EventsObjectPage: Users_EventsObjectPage
        },
        async: true
    });

    return runner;
});

