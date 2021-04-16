import {extend} from 'flarum/common/extend';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import LogInModal from 'flarum/forum/components/LogInModal';

/* global app */

app.initializers.add('clarkwinkelmann-email-as-display-name', () => {
    extend(SignUpModal.prototype, 'fields', function (items) {
        if (app.forum.attribute('email-as-display-name.removeUsernameRegistration') && items.has('username')) {
            items.remove('username');
        }
    });

    extend(LogInModal.prototype, 'fields', function (items) {
        if (app.forum.attribute('email-as-display-name.removeUsernameRegistration') && items.has('identification')) {
            const vdom = items.get('identification');

            if (
                vdom &&
                Array.isArray(vdom.children) &&
                vdom.children.length > 0 &&
                vdom.children[0] &&
                vdom.children[0].attrs
            ) {
                vdom.children[0].attrs.placeholder = app.translator.trans('clarkwinkelmann-email-as-display-name.forum.log_in.username_or_email_placeholder');
            }
        }
    });
});
