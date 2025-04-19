import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home.component').then(
                (m) => m.HomeComponent
            );
        },
    },
    {
        path: 'logs',
        loadComponent: () => {
            return import('./logs/logs.component').then(
                (m) => m.LogsComponent
            );
        }
    }
];
