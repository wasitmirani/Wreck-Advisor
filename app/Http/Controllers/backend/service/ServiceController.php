<?php

namespace App\Http\Controllers\backend\service;

use App\Models\Service;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $q=request('query');
        $services=Service::latest()->where('name', 'like', '%' . $q . '%')->with('parentServices')->paginate(env('PAR_PAGE'));
        $parent_services=Service::orderBy('name','asc')->get();
        return response()->json(['services'=>$services, 'parent_services'=> $parent_services]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
            $validated = $request->validate([
                'name' => 'required|unique:services|max:255',
            ]);
            $service= Service::create([
                'name'=>$request->name,
                'slug'=>Str::snake($request->name, '-'),
                'parent_id'=>$request->parent_id,
            ]);
            return response()->json($service,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
                'name' => 'required|unique:services,name,'.$id,
        ]);
        return Service::where('id',$id)->update([
            'name'=>$request->name,
            'slug'=>Str::snake($request->name, '-'),
            'parent_id' => $request->parent_id,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      return Service::destroy($id);
    }
}
