<?php

namespace App\Http\Controllers;

use App\Http\Resources\RouteQuestionnaireResource;
use App\Models\RouteQuestionnaire;
use Illuminate\Http\Request;

class RouteQuestionnaireController extends Controller
{
    public function __construct(protected RouteQuestionnaire $routeQuestionnaire)
    {

    }

    public function show()
    {
        return RouteQuestionnaireResource::make($this->routeQuestionnaire->getQuestionnaire());
    }

    /*
     *
     */
    public function store($request) //QuestionnaireAnswersRequest
    {
        foreach ($request->answers as $answer) {
            if ($answer->is_liked) {
                $likedCategories[] = $answer->category;
            } else {
                $dislikedCategories[] = $answer->category;
            }


        }
    }
}
