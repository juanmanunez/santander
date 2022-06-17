import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

   contacto: FormGroup;
   submitted = false;
   titulo = 'Test Santander';

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.contacto = this.formBuilder.group({
            nya: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            asunto: ['', Validators.required],
            postre: ['', Validators.required],
            mensaje: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get f() { return this.contacto.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.contacto.invalid) {
            return;
        }

        alert('Mensaje Enviado !');
    }
}
