import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit{
  ngOnInit() : void{
  }

  operandoA:number=0
  operandoB:number=0
  resultado:number=0

  sumar(){
    this.resultado= this.operandoA + this.operandoB    
  }
  restar(){
    this.resultado = this.operandoA-this.operandoB    
  }
  multiplicar(){
    this.resultado = this.operandoA*this.operandoB    
  }
  dividir(){
    this.resultado = this.operandoA/this.operandoB    
  }

}
