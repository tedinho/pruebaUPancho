<?php

namespace App\Http\Controllers;

use App\Models\obra;
use Illuminate\Http\Request;

class ObraController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return obra::get();
    }

    public function buscarPorNombre($nombre)
    {
        return obra::where('nombre', 'like', '%' . $nombre . '%')->get();
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
        $input = $request->all();
        return obra::create($input);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\obra  $obra
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return obra::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\obra  $obra
     * @return \Illuminate\Http\Response
     */
    public function edit(obra $obra)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\obra  $obra
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        obra::where('id', $id)->update($input);
        return obra::find($id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\obra  $obra
     * @return \Illuminate\Http\Response
     */
    public function destroy(obra $obra)
    {
        //
    }
}
