import { ModuleWithProviders, NgModule } from '@angular/core'; 
import { RouterModule } from '@angular/router'; 

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
    imports: [authRouting],
    declarations: [AuthComponent]

})

export class AuthModule {}