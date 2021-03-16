<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class obra extends Model
{
    protected $table = 'obras';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'nombre', 'fecha_ingreso', 'estado'];
    public $timestamps = false;
}
