import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { EditComponent } from './pages/edit/edit.component';


export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'bookings',
        component: BookingsComponent
    },
    {
        path: 'edit/id:',
        component: EditComponent
    },
    {
        path: '',
        component: HomeComponent
    },  
    {
        path: '**',
        component: HomeComponent
    },  
];
