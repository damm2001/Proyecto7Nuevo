import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

//Importación de la interfaz
import { Usuario } from 'src/app/interfaces/usuario';
import { Registro } from 'src/app/interfaces/registro';
//Importación del servicio
import { DatosusuariosService } from 'src/app/providers/datosusuarios.service';
import { DatosregistrosService } from 'src/app/providers/datosregistros.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, NgIf, NgFor, FormsModule, MatTableModule],
})
export class ReportComponent {

  public usuarios: Usuario[] = [];
  public filtroEntrenamiento: Registro[] = [];
  public entren: Registro[] = [];

  /* LISTA CON LOS ATRIBUTOS DE LA INTERFAZ */
  
  displayedColumns: string[] = ['idregistro', 'fecha_hora', 'usuario_idusuario', 'repeticiones'];
  usuariosSelect = new FormControl('');

  // Función para filtrar entrenamientos en base a la selección
  filterEntrenamiento(selectedValue: string) {
    
   if (selectedValue === '') {
      this.filtroEntrenamiento = this.entren;
    } else {
      const userId = Number(selectedValue); 
      // Filtrar entrenamientos en función del usuario seleccionado
      this.filtroEntrenamiento = this.entren.filter(entren => entren.usuario_idusuario === userId);
    }
  }

  constructor(private dataProvider: DatosusuariosService, private entrenamientoProvider: DatosregistrosService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.usuarios = (response as Usuario[]);
     
    })
    this.entrenamientoProvider.getResponse().subscribe((response) => {
      this.entren = (response as Registro[]);
      this.filtroEntrenamiento = this.entren;
    })

    // Suscribirse a los cambios en el FormControl
    this.usuariosSelect.valueChanges.subscribe((selectedValue) => {
      if (selectedValue !== null) {
        this.filterEntrenamiento(selectedValue);
      } else {
        this.filtroEntrenamiento = this.entren;
      }
    });

  }


}
