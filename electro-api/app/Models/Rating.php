<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Rating extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id', 'user_id', 'rating_by_user_id', 'rating'];

}
