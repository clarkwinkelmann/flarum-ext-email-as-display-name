<?php

namespace ClarkWinkelmann\EmailAsDisplayName;

use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\User\User;

class UserAttributes
{
    public function __invoke(BasicUserSerializer $serializer, User $user): array
    {
        $actor = $serializer->getActor();

        if (
            ($actor->id === $user->id && $actor->hasPermission('email-as-display-name.view-own')) ||
            $actor->hasPermission('email-as-display-name.view-all')
        ) {
            // We have to use the serializer extender instead of the display name driver because we need access to the actor
            return [
                'displayName' => $user->email,
            ];
        }

        return [];
    }
}
