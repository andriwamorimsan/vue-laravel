<?php

use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;



Route::apiResource('/users', UserController::class);

Route::apiResource('/produtos', ProdutoController::class);
