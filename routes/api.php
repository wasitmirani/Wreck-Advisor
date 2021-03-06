<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\backend\role\RoleController;
use App\Http\Controllers\backend\user\UserController;
use App\Http\Controllers\backend\listing\ListingController;
use App\Http\Controllers\backend\service\ServiceController;
use App\Http\Controllers\backend\permission\PermissionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->prefix('admin')->group(function () {



    Route::prefix('management')->group(function () {
        Route::resource('user', UserController::class);
        Route::post('remove-all/users', [UserController::class, 'removeAllUsers']);
        Route::resource('role', RoleController::class);
        Route::post('remove-all/roles', [UserController::class, 'removeAllRoles']);
        Route::resource('permission', PermissionController::class);
        Route::post('/remove-all/permissions', [PermissionController::class, 'removeAllPermissions']);
    });

    Route::resource('service', ServiceController::class);
    Route::resource('listing', ListingController::class);


});
Route::prefix('app')->group(function () {
    Route::post('/login', [UserController::class, 'login']);
    Route::post('/register', [UserController::class, 'register']);
});

Route::middleware('auth:sanctum')->prefix('app')->group(function () {

    Route::post('/store/listing', [ListingController::class, 'storeListing']);
    Route::get('/listings', [ListingController::class, 'getListings']);

});



