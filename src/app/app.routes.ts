import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ViewBooksComponent } from './books/view-books/view-books.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: AdminComponent },
  { path: 'viewbooks', component: ViewBooksComponent},
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];
