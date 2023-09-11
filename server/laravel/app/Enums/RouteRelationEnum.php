<?php

namespace app\Enums;

enum RouteRelationEnum: string
{
    case difficulty = 'difficulty';
    case photoPaths = 'photoPaths';
    case categories = 'categories';
    case comments = 'comments.user';
    case targetAudiences = 'targetAudiences';


    public static function allRelations(): array
    {
        $array = [];
        foreach (self::cases() as $case) {
            $array[] = $case->name;
        }
        return $array;
    }
}
