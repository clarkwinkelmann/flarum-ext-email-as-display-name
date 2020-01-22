<?php

use Flarum\Extend;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Event\Saving;
use Flarum\User\User;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/locale'),

    function (Dispatcher $events) {
        $events->listen(Serializing::class, function (Serializing $event) {
            // We have to use the Serializing event instead of GetDisplayName because we need access to the actor
            if (
                $event->model instanceof User &&
                Arr::exists($event->attributes, 'displayName') &&
                (($event->actor->id === $event->model->id && $event->actor->hasPermission('email-as-display-name.view-own')) || $event->actor->hasPermission('email-as-display-name.view-all'))
            ) {
                $event->attributes['displayName'] = $event->model->email;
            }

            if ($event->isSerializer(ForumSerializer::class)) {
                /**
                 * @var SettingsRepositoryInterface $settings
                 */
                $settings = app(SettingsRepositoryInterface::class);

                $event->attributes['email-as-display-name.removeUsernameRegistration'] = (bool)$settings->get('email-as-display-name.removeUsernameRegistration');
            }
        });

        $events->listen(Saving::class, function (Saving $event) {
            /**
             * @var SettingsRepositoryInterface $settings
             */
            $settings = app(SettingsRepositoryInterface::class);

            if ($settings->get('email-as-display-name.removeUsernameRegistration') && !$event->user->exists) {
                // If it's a new user, generate the username by force, even if one was specified during registration
                $event->user->username = Str::random(20);
            }
        });
    },
];
