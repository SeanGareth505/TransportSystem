import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'topbar-widget',
    imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule],
    template: `<a class="flex items-center" href="#">
<svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" fill="none">
    <!-- Background (Can be removed if needed) -->
    <rect width="120" height="60" rx="10" fill="var(--primary-color, #002A5E)"/>

    <!-- Speedy Road Mark -->
    <path d="M10 45 L40 20 L70 30 L100 10" stroke="white" stroke-width="4" stroke-linecap="round"/>

    <!-- Abstract Transport Shape -->
    <path d="M20 35 C35 10, 75 5, 105 25 L95 30 C70 15, 40 20, 20 35 Z" fill="white"/>

    <!-- Company Name -->
    <text x="15" y="52" fill="white" font-size="12" font-family="Arial" font-weight="bold">NOVA TRANSIT</text>

    <!-- Tagline -->
    <text x="15" y="58" fill="white" font-size="6" font-family="Arial" font-weight="light">Reliable | Fast | Efficient</text>
</svg>


            <span class="text-surface-900 dark:text-surface-0 font-medium text-2xl leading-normal mr-20">TRANSPORT</span>
        </a>

        <a pButton [text]="true" severity="secondary" [rounded]="true" pRipple class="lg:!hidden" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
            <i class="pi pi-bars !text-2xl"></i>
        </a>

        <div class="items-center bg-surface-0 dark:bg-surface-900 grow justify-between hidden lg:flex absolute lg:static w-full left-0 top-full px-12 lg:px-0 z-20 rounded-border">
            <ul class="list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row cursor-pointer gap-8">
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'home' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'features' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Features</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'highlights' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Highlights</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'pricing' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Pricing</span>
                    </a>
                </li>
            </ul>
            <div class="flex border-t lg:border-t-0 border-surface py-4 lg:py-0 mt-4 lg:mt-0 gap-2">
                <button pButton pRipple label="Login" routerLink="/auth/login" [rounded]="true" [text]="true"></button>
                <button pButton pRipple label="Register" routerLink="/auth/login" [rounded]="true"></button>
            </div>
        </div> `
})
export class TopbarWidget {
    constructor(public router: Router) { }
}
