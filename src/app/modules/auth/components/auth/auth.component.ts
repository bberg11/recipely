import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  signInMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm): void {
    const { email, password } = form.value;
    let authObservable = new Observable();

    this.isLoading = true;
    this.error = null;

    if (this.signInMode) {
      authObservable = this.authService.signIn(email, password);
    } else {
      authObservable = this.authService.signUp(email, password);
    }

    authObservable.subscribe(
      () => {
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (error) => {
        this.error = error;
        this.isLoading = false;
      }
    );

    form.reset();
  }

  toggleMode(event: Event): void {
    event.preventDefault();
    this.signInMode = !this.signInMode;
  }
}
