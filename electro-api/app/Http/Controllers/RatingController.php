<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use Illuminate\Http\Request;

class RatingController extends Controller
{

    public function ratingAvg(Request $request)
    {
        $ratingAvg = Rating::Where(['user_id' => $request['user_id']])->pluck('rating')->avg();

        if (is_null($ratingAvg)) {
            return [
                'data' => [
                    'rating' => 0
                ],
                'message' => "Not Found Data "
            ];
        }

        return [
            'data' => [
                'rating' => $ratingAvg
            ],
            'message' => "Rating Data"
        ];
    }


}
