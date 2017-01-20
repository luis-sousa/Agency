<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/




Route::get('/', function () {
    return view('layouts.master');
});

Route::get('/services', function () {
    return view('pages.services');
});

Route::get('/portfolio', function () {
    return view('pages.portfolio');
});

Route::get('/about', function () {
    return view('pages.about');
});

Route::get('/team', function () {
    return view('pages.team');
});

Route::get('/contact', function () {
    return view('pages.contact');
});
