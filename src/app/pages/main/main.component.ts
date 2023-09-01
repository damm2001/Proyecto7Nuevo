import { Component } from '@angular/core';

//Importación de la interfaz
import { Usuario } from 'src/app/interfaces/usuario';

//Importación del servicio
import { DatosusuariosService } from 'src/app/providers/datosusuarios.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  //Atributo con el tipo de dato de la interfaz
  public data : Usuario[] = [];

  /* LISTA CON LOS ATRIBUTOS DE LA INTERFAZ */
  displayedColumns: string[] = ['nombre_usuario','correo_usuario'];

  //Inyección de dependencia del servicio
  constructor(private dataProvider: DatosusuariosService) { }

  

  //Ejecución de la petición y suscripción de la respuesta
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Usuario[]); 
    })
  }
}
