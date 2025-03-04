import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [ButtonModule, InputTextModule, PasswordModule, FormsModule, ReactiveFormsModule, RouterModule, RippleModule, AppFloatingConfigurator],
    template: `
        <app-floating-configurator />
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                        <div class="text-center mb-8">
                            <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <!-- Background (Can be removed if needed) -->
                                <rect width="120" height="60" rx="10" fill="var(--primary-color, #002A5E)" />

                                <!-- Speedy Road Mark -->
                                <path d="M10 45 L40 20 L70 30 L100 10" stroke="white" stroke-width="4" stroke-linecap="round" />

                                <!-- Abstract Transport Shape -->
                                <path d="M20 35 C35 10, 75 5, 105 25 L95 30 C70 15, 40 20, 20 35 Z" fill="white" />

                                <!-- Company Name -->
                                <text x="15" y="52" fill="white" font-size="12" font-family="Arial" font-weight="bold">NOVA TRANSIT</text>

                                <!-- Tagline -->
                                <text x="15" y="58" fill="white" font-size="6" font-family="Arial" font-weight="light">Reliable | Fast | Efficient</text>
                            </svg>

                            <span class="text-muted-color font-medium mt-2">Create an account</span>
                        </div>

                        <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
                            <label for="name" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Name</label>
                            <input pInputText id="name" type="text" placeholder="Name" class="w-full md:w-[30rem] mb-8" formControlName="name" />

                            <label for="email" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
                            <input pInputText id="email" type="text" placeholder="Email address" class="w-full md:w-[30rem] mb-8" formControlName="email" />

                            <label for="password" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Password</label>
                            <p-password id="password" placeholder="Password" [toggleMask]="true" styleClass="mb-4" [fluid]="true" [feedback]="false" formControlName="password"></p-password>

                            <label for="confirmPassword" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Confirm Password</label>
                            <p-password id="confirmPassword" placeholder="Confirm Password" [toggleMask]="true" styleClass="mb-4" [fluid]="true" [feedback]="false" formControlName="confirmPassword"></p-password>

                            <p-button label="Sign Up" styleClass="w-full" type="submit"></p-button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class Signup {
    signupForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.signupForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.signupForm.valid) {
            console.log('Form Submitted', this.signupForm.value);
        }
    }
}