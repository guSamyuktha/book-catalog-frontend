import { Component } from '@angular/core';
import { HeaderComponent } from './header/header/header.component';
import { AdminComponent } from "./admin/admin.component";
import { RegisterComponent } from "./register/register.component";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'books';
}
