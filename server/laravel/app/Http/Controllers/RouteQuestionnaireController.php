<?php

namespace App\Http\Controllers;

use App\Http\Requests\QuestionnaireAnswersRequest;
use App\Http\Resources\RouteQuestionnaireResource;
use App\Http\Resources\RouteResource;
use App\Models\RouteQuestionnaire;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class RouteQuestionnaireController extends Controller
{
    public function __construct(protected RouteQuestionnaire $routeQuestionnaire)
    {

    }

    public function show(): RouteQuestionnaireResource
    {
        return RouteQuestionnaireResource::make($this->routeQuestionnaire->getQuestionnaire());
    }

    public function store(QuestionnaireAnswersRequest $request): AnonymousResourceCollection
    {
        return RouteResource::collection($this->routeQuestionnaire->generateRecommendationsForUser($request->validated()));
    }
}
