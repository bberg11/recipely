import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  signInMode = true;

  onSubmit(form: NgForm): void {
    console.log(form.value);
    form.reset();
  }

  toggleMode(event: Event): void {
    event.preventDefault();
    this.signInMode = !this.signInMode;
  }
}
