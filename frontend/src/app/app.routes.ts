import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModalFormComponent } from './modal-form/modal-form.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'form', component: ModalFormComponent},
    {path: 'form/:id', component: ModalFormComponent}
];
