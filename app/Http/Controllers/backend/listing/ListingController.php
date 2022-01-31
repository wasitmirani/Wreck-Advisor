<?php

namespace App\Http\Controllers\backend\listing;

use App\Models\Listing;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ListingController extends Controller
{
    //

    public function storeListing(Request $request){
       $item=Listing::create([
        'title'=>$request->title,
        'user_id'=>$request->user()->id,
        'car_model'=>$request->car_model,
        'car_number' => $request->car_number,
        'license'=>$request->license,
        'location'=>$request->location,
        'images'=>json_encode($request->images),
      ]);

      return response()->json($item);
    }

    public function getListings(Request $request){
        $listings = Listing::latest()->where('user_id',$request->user()->id)->get();
        return response()->json(['listings'=>$listings]);
    }
}
