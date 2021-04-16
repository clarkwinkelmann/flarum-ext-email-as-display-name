<?php

namespace ClarkWinkelmann\EmailAsDisplayName;

use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Extend;
use Flarum\User\Event\Saving;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\ApiSerializer(BasicUserSerializer::class))
        ->attributes(UserAttributes::class),

    (new Extend\Settings())
        ->serializeToForum('email-as-display-name.removeUsernameRegistration', 'email-as-display-name.removeUsernameRegistration', 'boolval'),

    (new Extend\Event())
        ->listen(Saving::class, SaveUser::class),
];
