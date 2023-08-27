import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  description: string = 'Proyecto 7 del grupo conformado por Diego Martínez e Irving Macías '; /* Cambie el texto con la descripción de su proyecto */
}
