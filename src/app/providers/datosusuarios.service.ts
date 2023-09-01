import { Injectable } from '@angular/core';

//Importación del HttpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class DatosusuariosService {

  //Atributo URL
  private URL: string = 'http://localhost:3000/rest/usuario/findAll/json';


  //Inyección de dependencia del HttpClient
  constructor(private http:HttpClient) { }

  getResponse() {
    return this.http.get(this.URL);
}
}
