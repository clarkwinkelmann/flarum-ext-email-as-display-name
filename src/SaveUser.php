<?php

namespace ClarkWinkelmann\EmailAsDisplayName;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Event\Saving;
use Illuminate\Support\Str;

class SaveUser
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(Saving $event)
    {
        if ($this->settings->get('email-as-display-name.removeUsernameRegistration') && !$event->user->exists) {
            // If it's a new user, generate the username by force, even if one was specified during registration
            $event->user->username = Str::random(20);
        }
    }
}
