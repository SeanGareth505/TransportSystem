import { Routes } from '@angular/router';
import { Access } from './access';
import { Error } from './error';
import { Signup } from './signup';
import { AuthComponent } from './login.component/login.component';

export default [
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'login', component: AuthComponent },
    { path: 'signup', component: Signup }
] as Routes;
