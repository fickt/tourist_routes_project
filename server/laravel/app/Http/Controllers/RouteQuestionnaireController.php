<?php

namespace App\Http\Controllers;

use App\Http\Resources\RouteQuestionnaireResource;
use App\Models\Route;
use App\Models\RouteQuestionnaire;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class RouteQuestionnaireController extends Controller
{
    public function __construct(protected RouteQuestionnaire $routeQuestionnaire)
    {

    }

    public function index()
    {
        return auth()->user()->recommendations()->get();
    }

    public function show()
    {
        return RouteQuestionnaireResource::make($this->routeQuestionnaire->getQuestionnaire());
    }

    /*
     *
     */
    public function store(Request $request): Collection //QuestionnaireAnswersRequest
    {
        $dislikedCategories = [];
        foreach ($request->getPayload() as $answer) {
            if (!$answer['is_liked']) {
                $dislikedCategories[] = $answer['category'];
            }
        }
        $recommendedRoutes = Route::query()->whereHas('categories', function ($q) use ($dislikedCategories) {
            $q->whereNotIn('name', $dislikedCategories);
        })->get();
        /**
         * @var User $user
         */
        $user = auth()->user();
        foreach ($recommendedRoutes as $route) {
            $user->recommendations()->attach($route);
        }
        return $user->recommendations()->get();
    }
}
