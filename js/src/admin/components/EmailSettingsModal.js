import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';
import Switch from 'flarum/components/Switch';

/* global m */

const settingsPrefix = 'email-as-display-name.';
const translationPrefix = 'clarkwinkelmann-email-as-display-name.admin.settings.';

export default class EmailSettingsModal extends SettingsModal {
    title() {
        return app.translator.trans(translationPrefix + 'title');
    }

    form() {
        return [
            m('.Form-group', [
                Switch.component({
                    state: this.setting(settingsPrefix + 'removeUsernameRegistration')() === '1',
                    onchange: value => {
                        this.setting(settingsPrefix + 'removeUsernameRegistration')(value ? '1' : '0');
                    },
                    children: app.translator.trans(translationPrefix + 'remove-username-registration'),
                }),
            ]),
        ];
    }
}
