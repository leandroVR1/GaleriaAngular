import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-imagen',
  standalone: true,
  imports: [],
  templateUrl: './detalle-imagen.component.html',
 
})
export class DetalleImagenComponent {
  @Input() imagen: any;
}
