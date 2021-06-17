/* global app */

app.initializers.add('clarkwinkelmann-email-as-display-name', () => {
    app.extensionData.for('clarkwinkelmann-email-as-display-name')
        .registerSetting({
            setting: 'email-as-display-name.removeUsernameRegistration',
            type: 'switch',
            label: app.translator.trans('clarkwinkelmann-email-as-display-name.admin.settings.remove-username-registration')
        })
        .registerPermission({
            icon: 'fas fa-at',
            label: app.translator.trans('clarkwinkelmann-email-as-display-name.admin.permissions.view-own'),
            permission: 'email-as-display-name.view-own',
            allowGuest: true, // We need guest to allow for suspended/non-activated users
        }, 'view')
        .registerPermission({
            icon: 'fas fa-at',
            label: app.translator.trans('clarkwinkelmann-email-as-display-name.admin.permissions.view-all'),
            permission: 'email-as-display-name.view-all',
            allowGuest: true,
        }, 'view');
});
