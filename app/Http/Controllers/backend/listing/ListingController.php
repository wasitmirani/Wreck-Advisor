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
        'description'=>$request->description,
        'license'=>$request->license,
        'location'=>$request->location,
        'images'=>json_encode($request->images),
      ]);

      return response()->json($item);
    }

    public function getListings(Request $request){
        $listings = Listing::latest()->get();
        return response()->json(['listings'=>$listings]);
    }
}
