import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppFloatingConfigurator } from '../../../layout/component/app.floatingconfigurator';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { getDatabase, Database, ref, set } from '@angular/fire/database';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, AppFloatingConfigurator, ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, AppFloatingConfigurator],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class AuthComponent {
  isSignUp = signal(false);

  loginData = signal({
    email: '',
    password: ''
  });

  signupData = signal({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  constructor(private db: Database) {}

  ngOnInit() {
    const testRef = ref(this.db, 'test');
    set(testRef, { message: 'Hello Firebase!' }).then(() => {
      console.log('Data added to Firebase!');
    }).catch((err: any) => console.error('Error:', err));
  }

  toggleSignUp(): void {
    this.isSignUp.set(!this.isSignUp());
  }

  validateInputs(): void {
    const login = this.loginData();
    const signup = this.signupData();

    if (!login.email) this.loginData.set({ ...login, email: 'Required field' });
    if (!signup.name) this.signupData.set({ ...signup, name: 'Required field' });
    if (!login.password) this.loginData.set({ ...login, password: 'Required field' });
    if (!signup.email) this.signupData.set({ ...signup, email: 'Required field' });
    if (!signup.password) this.signupData.set({ ...signup, password: 'Required field' });
    if (!signup.confirmPassword) this.signupData.set({ ...signup, confirmPassword: 'Required field' });
  }
}
