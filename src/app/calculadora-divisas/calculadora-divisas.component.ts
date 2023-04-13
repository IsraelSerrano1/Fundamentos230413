import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-divisas',
  templateUrl: './calculadora-divisas.component.html',
  styleUrls: ['./calculadora-divisas.component.css']
})
export class CalculadoraDivisasComponent {

  OnInit(){    
  }
  euro:number=0
  dolar:number=1.10
  yuan:number=7.58
  libra:number=0.88
  resultado:number=0
  divisa:string=""
  convert(divisa:string){
switch(this.divisa){
  case "dolar":
    this.resultado= this.euro*this.dolar
    break;
  case"yuan":
    this.resultado= this.euro*this.yuan
    break;
  case"libra":
    this.resultado= this.euro*this.libra
    break;
  defalult:
    this.resultado=0
    break;
}

}

}
