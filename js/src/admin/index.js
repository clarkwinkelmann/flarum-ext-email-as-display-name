import {extend} from 'flarum/extend';
import app from 'flarum/app';
import PermissionGrid from 'flarum/components/PermissionGrid';
import ItemList from 'flarum/utils/ItemList';
import EmailSettingsModal from './components/EmailSettingsModal';

const translationPrefix = 'clarkwinkelmann-email-as-display-name.admin.permissions.';

app.initializers.add('clarkwinkelmann-email-as-display-name', () => {
    app.extensionSettings['clarkwinkelmann-email-as-display-name'] = () => app.modal.show(new EmailSettingsModal());

    extend(PermissionGrid.prototype, 'permissionItems', function (permissionGroups) {
        const items = new ItemList();

        items.add('view-own', {
            icon: 'fas fa-at',
            label: app.translator.trans(translationPrefix + 'view-own'),
            permission: 'email-as-display-name.view-own',
        });

        items.add('view-all', {
            icon: 'fas fa-at',
            label: app.translator.trans(translationPrefix + 'view-all'),
            permission: 'email-as-display-name.view-all',
            allowGuest: true,
        });

        permissionGroups.add('clarkwinkelmann-email-as-display-name', {
            label: app.translator.trans(translationPrefix + 'heading'),
            children: items.toArray()
        });
    });
});
