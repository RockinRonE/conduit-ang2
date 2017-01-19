import { ModuleWithProviders, NgModule } from '@angular/core'; 
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AuthComponent } from './auth.component'; 



const authRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'signin',
        component: AuthComponent
    },
    {
        path: 'register',
        component: AuthComponent
    }

]);

@NgModule({
    imports: [
        authRouting,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AuthComponent
        ],
})

export class AuthModule {}