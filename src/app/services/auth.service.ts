import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';
  tokenType  = 'Bearer ';
  private token='';
  constructor(private http : HttpClient, private cookieService : CookieService) { }
   register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addNewUser`, user);
  }

  login(credentials: any): Observable<any> {
    const header = new HttpHeaders().set('Authorization', this.tokenType + this.cookieService.get('token'));
    const headers = { headers: header };
    return this.http.post(`${this.baseUrl}/generateToken`, credentials, headers);
  }


   setToken(token: string) {
     this.token = token;
     localStorage.setItem('authToken', token);
     }
    
     getToken() {
     return this.token || localStorage.getItem('authToken');
     }
    
}
