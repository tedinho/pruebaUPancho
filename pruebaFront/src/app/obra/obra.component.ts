import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Obra } from '../models/obra';
import { ObraService } from '../service/obra.service';

@Component({
  selector: 'app-obra',
  templateUrl: './obra.component.html',
  styleUrls: ['./obra.component.css']
})
export class ObraComponent implements OnInit {

  obras: Obra[];
  id: number;
  mensajeDatosGenerales: string;
  obra: Obra;
  errorMessage: string;

  formularioObra = new FormGroup({
    nombre: new FormControl(''),
    estado: new FormControl('A'),
    fecha_ingreso: new FormControl()
  });

  filtro = new FormGroup({
    nombre: new FormControl(''),
  });

  constructor(private obraServicio: ObraService) { }

  ngOnInit(): void {
    this.getObras();
  }

  guardar() {
    if (this.id == null) {
      console.log(this.formularioObra.value);
      this.obraServicio
        .guardarObra(this.formularioObra.value)
        .subscribe(
          obra => {
            this.obra = obra as Obra;
            this.id = this.obra.id;
            this.mensajeDatosGenerales = "La obra ha sido creada correctamente";
            this.getObras();
            document.getElementById('id01').style.display = 'none';
            this.formularioObra = new FormGroup({
              nombre: new FormControl(''),
              estado: new FormControl('A'),
              fecha_ingreso: new FormControl()
            });
          }
        );
    } else {
      this.obraServicio
        .actualizarObra(this.formularioObra.value, this.id)
        .subscribe(
          obra => {
            this.obra = obra as Obra;
            this.id = this.obra.id;
            this.mensajeDatosGenerales = "La obra ha sido actualizada correctamente";
            document.getElementById('id01').style.display = 'none'
            this.getObras();
            this.formularioObra = new FormGroup({
              nombre: new FormControl(''),
              estado: new FormControl('A'),
              fecha_ingreso: new FormControl()
            });
          },
          error => {
            this.errorMessage = error.json().errors;
          }
        );
    }
  }

  editar(obra: Obra) {
    this.formularioObra = new FormGroup({
      nombre: new FormControl(''),
      estado: new FormControl('A'),
      fecha_ingreso: new FormControl(),
      id: new FormControl()
    });
    this.formularioObra.setValue(obra);
    this.id = obra.id;
  }

  getObras() {
    this.obraServicio
      .getObras(this.filtro.get('nombre').value)
      .subscribe(
        obras => {
          this.obras = obras
        }, (error) => {
          console.log(error);
        }
      );
  }

  buscar() {
    this.getObras();
  }

}
