<?php

namespace Database\Seeders;

use App\Models\Route;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RouteSeederFromCsv extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        if (($open = fopen(storage_path() . "/routes" . "/data_for_db.csv", "r")) !== FALSE) {
            fgetcsv($open, 1000, ",");
            while (($data = fgetcsv($open, 1000, ",")) !== FALSE) {
                Route::query()->create(
                    [
                        'name' => $data[0],
                        'description' => $data[1],
                        'latitude' => $data[2],
                        'longitude' => $data[3],
                        'difficulty_id' => $data[4],
                        'distance_from_nearest_city' => $data[5],
                        'rating' => 0
                    ]
                );
            }
            fclose($open);
        }
    }
}
