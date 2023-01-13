import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reto1',
  templateUrl: './reto1.component.html',
  styleUrls: ['./reto1.component.css']
})
export class Reto1Component {

  pipesForm = this.formsBuilder.group({
    valor: ["", {
      validators: [
        Validators.required,
        Validators.pattern('^[A-Z a-z]+$')
      ]
    }]
  })

  get valor() { return this.pipesForm.get('valor') }
  
  constructor(private formsBuilder: FormBuilder) { }

  Refrescar() {
    location.reload();
  }
}
