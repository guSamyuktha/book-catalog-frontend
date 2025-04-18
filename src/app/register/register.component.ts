import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserRegister } from '../user.model';
import { HeaderComponent } from "../header/header/header.component";

@Component({
  selector: 'app-register',
  imports: [FormsModule, HeaderComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: UserRegister = { username: '', password: '', roles: 'ADMIN' };
  registererror:boolean=false;
  constructor(private authService: AuthService, private router: Router) { }
  fallbackContent='';
  register() {
    this.authService.register(this.user).subscribe((data) => {
      console.log(data)
      this.registererror=true;
      this.fallbackContent=data.message;
      this.router.navigate(['/login']);
    }, error => {
      this.registererror=true;
      this.fallbackContent="Registration error";
      console.error('Registration error: ', error);

    });
  }
  registerClick() {
    this.router.navigate(['']);
  }
  login() {
    console.log("login");
    this.router.navigate(['/login']);
  }
}
