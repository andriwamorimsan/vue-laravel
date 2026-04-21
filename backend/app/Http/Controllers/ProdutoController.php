<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProdutoRequest;
use App\Models\Produto;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProdutoRequest $request)
    {

             $data = $request->validated();

                try{

                    $prod = new Produto();
                    $prod->fill($data);
                    $prod->save();

                    return response()->json($prod->toResource(), 201);


                }catch(\Exception $ex){

                    return response()->json([
                            'message' => 'Erro ao criar produto: ' . $ex->getMessage()
                        ], 400);
                }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
       try {
        $produto = Produto::with('user')->findOrFail($id);

        return response()->json($produto, 200);

    } catch (\Exception $ex) {
        return response()->json([
            'message' => 'Produto não encontrado'
        ], 404);
    }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produto $produto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Produto $produto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produto $produto)
    {
        //
    }
}
