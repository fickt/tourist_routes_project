<?php

namespace app\Enums;

enum RouteTargetAudienceEnum: string
{
    case Family = 'с семьей';
    case Friends = 'с друзьями';
    case Alone = 'в одиночку';
}
