<?php

namespace Database\Seeders;

use App\Models\Route;
use App\Models\RouteDifficulty;
use App\Models\RoutePhoto;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RouteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        $route_difficulty = RouteDifficulty::query()
            ->where('name', '=', 'новичок')
            ->first();

        Route::query()->create(
            [
                'name' => 'Тестовый маршрут',
                'description' => 'Дон ли, Волга ли течёт — котомку на плечо
Боль в груди — там тайничок, открытый фомкой, не ключом
Сколько миль ещё? Перелет короткий был не в счёт
Долгий пыльный чёс, фургон набит коробками с мерчём
Верим — подфартит, наши постели портативны
Менестрелю два пути: корпоратив или квартирник
Схемы однотипны, все теперь MC
Ведь, смену породив, мы здесь достигли смены парадигмы
Теперь рэп — многопартийный; бэттлов наплодив
Я смотрю в зеркало по типу: «Сколько бед наворотил ты!»
Я б весь рэп поработил, но всё время в пути
У индустрии нервный тик, валокордин — стенокардийным
Соберите суд, но победителей не судят
Мы первые кроманьонцы — мы выбились в люди',
                'difficulty_id' => $route_difficulty->id,
                'longitude' => 91.4,
                'latitude' => 53.7,
                'distance_from_nearest_city' => 142.243,
                'rating' => 0
            ]
        );
    }
}
