<?php

namespace App\Http\Controllers;

use App\Models\RouteQuestionnaire;
use Illuminate\Http\Request;

class RouteQuestionnaireController extends Controller
{
    public function __construct(protected RouteQuestionnaire $routeQuestionnaire){

    }

    public function show()
    {
        return $this->routeQuestionnaire->getQuestionnaire();
    }
}
