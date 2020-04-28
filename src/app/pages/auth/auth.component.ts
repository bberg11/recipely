import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  signInMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm): void {
    const { email, password } = form.value;

    this.isLoading = true;

    if (this.signInMode) {
      this.authService.signUp(email, password).subscribe(
        (response) => {
          console.log(response);
          this.isLoading = false;
        },
        (error) => {
          console.log(error);
          this.error = error;
          this.isLoading = false;
        }
      );
    } else {
      // handle sign up
    }

    form.reset();
  }

  toggleMode(event: Event): void {
    event.preventDefault();
    this.signInMode = !this.signInMode;
  }
}
