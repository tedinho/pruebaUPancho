import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Obra } from '../models/obra';
const API_URL: string = 'http://localhost:8000/api/';
@Injectable({
  providedIn: 'root'
})
export class ObraService {

  constructor(private http: HttpClient) { }

  getObras(nombre: string): Observable<Obra[]> {
    console.log(nombre);
    if (nombre != null && nombre != '') {
      return this.http.get<Obra[]>(API_URL + 'obras/buscar-por-nombre/' + nombre);
    } else {
      return this.http.get<Obra[]>(API_URL + 'obras');
    }
  }

  buscarObra(llave: number): Observable<Obra> {
    return this.http.get<Obra>(API_URL + 'obras/' + llave + '');
  }

  actualizarObra(obra, id) {
    return this.http.put(API_URL + 'obras/' + id, obra);
  }

  guardarObra(obra) {
    return this.http.post(API_URL + 'obras/', obra);
  }
}
