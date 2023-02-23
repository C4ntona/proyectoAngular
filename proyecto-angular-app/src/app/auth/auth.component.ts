import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(){}
  login(form:NgForm){
    const email = form.value.email
    const password = form.value.password

    //enviar datos al back
  }
}

