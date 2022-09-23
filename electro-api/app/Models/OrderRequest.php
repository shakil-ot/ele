<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class OrderRequest extends Model
{
    protected $table = 'OrderRequest';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id', 'user_id', 'name', 'email','address', 'request_by_user_id', 'status'];

}
