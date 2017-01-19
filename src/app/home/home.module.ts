import { ModuleWithProviders, NgModule } from '@angular/core'; 
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component'; 

import { HttpModule } from '@angular/http';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: HomeComponent
    }
]);

@NgModule({
    imports: [
        homeRouting,
        HttpModule
    ], 
    declarations: [
        HomeComponent
    ]
})

export class HomeModule { }


