import { Component } from '@angular/core';

@Component({
  selector: 'app-reto2',
  templateUrl: './reto2.component.html',
  styleUrls: ['./reto2.component.css']
})
export class Reto2Component {

  monedas = ['EUR', 'PEN', 'USD', 'BOV'];
  monto = "";
  tipo = "";
  lista = new Array;
  add() {
    this.lista.push({ 'Monto': this.monto, 'Moneda': this.tipo })
  }

  obj = [
    {
      Apellido: "Arcilla",
      Casado: false,
      Direccion: "Calle 35",
      Nombre:"Diego",
      Telefono:"23116554"
    },
    {
      Apellido: "Arcilla2",
      Casado: true,
      Direccion: "Calle 35",
      Nombre:"Diego2",
      Telefono:"23116554"
    },
    {
      Apellido: "Arcilla3",
      Casado: false,
      Direccion: "Calle 35",
      Nombre:"Diego3",
      Telefono:"23116554"
    }
  ]
}
