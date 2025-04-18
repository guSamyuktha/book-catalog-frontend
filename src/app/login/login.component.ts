import { Component } from '@angular/core';
import { UserLogin } from '../user.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header/header.component";

@Component({
  selector: 'app-login',
  imports: [FormsModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: UserLogin = { username: '', password: ''};
  registererror:boolean=false;
  constructor(private authService: AuthService, private router: Router) { }
  fallbackContent='';
  login() {
    this.authService.login(this.user).subscribe((data) => {
      console.log(data)
      if(data.success){
          const token = data.data;
          this.authService.setToken(token);
        this.router.navigate(['/home']);
      }
      else{
        this.registererror=true;
        this.fallbackContent=data.errors[0];
      }
    }, error => {
      console.error('Login error: ', error);

    });
  }
  register() {
    this.router.navigate(['']);
  }
  loginClick() {
    console.log("login");
    this.router.navigate(['/login']);
  }
}
