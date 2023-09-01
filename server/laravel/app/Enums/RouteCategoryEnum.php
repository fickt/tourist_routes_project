<?php

namespace app\Enums;

enum RouteCategoryEnum: string
{
    case Rivers = 'реки';
    case Mountains = 'горы';
    case HistoricSites = 'исторические места';
    case Resorts = 'зоны отдыха';
    case Lakes = 'озёра';
    case Caves = 'пещеры';
    case SkiingComplex = 'горнолыжные комплексы';
    case Forests = 'леса';
    case Parks = 'парки';
    case Preserves = 'заповедники';
    case Kurgans = 'курганы';
}
