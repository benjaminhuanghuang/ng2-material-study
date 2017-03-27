import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
 ];

 export const Ng2PlayRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
