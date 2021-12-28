<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontendController extends Controller
{
    //
    public function index(Request $request)
    {

        return view('frontend.pages.index');
    }

    public function aboutUs(Request $request)
    {

        return view('frontend.pages.about');
    }
    public function listing()
    {

        return view('frontend.pages.listing');
    }

    public function thankYou(Request $request){
        return view('frontend.pages.thankyou');
    }

    public function contact(Request $request){
        return view('frontend.pages.contact');
    }
    public function howWorks(Request $request){
        return view('frontend.pages.howworks');
    }

    public function blogs(Request $request){
        return view('frontend.pages.blogs');
    }
}
