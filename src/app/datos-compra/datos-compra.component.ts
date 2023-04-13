import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-compra',
  templateUrl: './datos-compra.component.html',
  styleUrls: ['./datos-compra.component.css']
})
export class DatosCompraComponent {
  OnInit(){    
  }
  correo:string=""
  direccion:string=""
  telefono:string=""
  comunidad:string=""
  fPago:string=""
  infoProductos:boolean=false
  resultado:string=""
  enviarDatos(){
    this.resultado=" Correo:"+this.correo+", Dirección: "+this.direccion+
    ", Teléfono: "+this.telefono+", Comunidad: "+this.comunidad+
    ", Forma de Pago: "+this.fPago+", Acepta información Productos: "+
    (this.infoProductos?"Aceptado":"No aceptado")

  }

}
