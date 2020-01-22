import {extend} from 'flarum/extend';
import app from 'flarum/app';
import SignUpModal from 'flarum/components/SignUpModal';
import LogInModal from 'flarum/components/LogInModal';

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
                typeof vdom === 'object' &&
                Array.isArray(vdom.children) &&
                vdom.children.length > 0 &&
                typeof vdom.children[0] === 'object' &&
                typeof vdom.children[0].attrs === 'object'
            ) {
                vdom.children[0].attrs.placeholder = app.translator.trans('clarkwinkelmann-email-as-display-name.forum.log_in.username_or_email_placeholder');
            }
        }
    });
});
