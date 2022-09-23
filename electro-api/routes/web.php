<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});




$router->get('/version', function () use ($router) {
    return $router->app->version();
});

Route::group([ 'prefix' => 'api'], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('user-profile', 'AuthController@me');
    Route::post('get-user-by-id', 'UserController@getUserById');
    Route::post('user-status-change', 'UserController@userStatusChange');
    Route::post('rating-avg', 'RatingController@ratingAvg');
    Route::get('get-all-current-location', 'UserController@getAllCurrentLocation');
    Route::post('order-request', 'UserController@orderRequest');
    Route::post('order-request-get', 'UserController@orderRequestGet');
    Route::post('order-request-send', 'UserController@orderRequestSend');
    Route::post('order-request-change-status', 'UserController@orderRequestChangeStatus');
});
