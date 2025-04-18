import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse,BookRequest } from '../books/book.model';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';
const API_URL="http://localhost:8080/api/v1/books"
@Injectable({
  providedIn: 'root'
})
export class IntegrationsService {
  tokenType  = 'Bearer ';
  constructor(private authService : AuthService, private http: HttpClient,  private cookieService : CookieService) { }
  
  updateData(request: BookRequest, bookId: number){
    const header = new HttpHeaders().set('Authorization', this.tokenType + this.authService.getToken());
    const headers = { headers: header };
    const url = `http://localhost:8080/api/v1/books/${bookId}`;
    this.http.put(url, request, headers).subscribe(response => {
    console.log(response);
 });

  }
  deleteData(bookId: number) {
    const header = new HttpHeaders().set('Authorization', this.tokenType + this.authService.getToken());
    const headers = { headers: header };
    const url = `http://localhost:8080/api/v1/books/${bookId}`;
    this.http.delete(url, headers).subscribe(response => {
      console.log(response);
    });
  }
  postData(request: BookRequest){
    const header = new HttpHeaders().set('Authorization', this.tokenType + this.authService.getToken());
    const headers = { headers: header };
    this.http.post(API_URL, request, headers).subscribe(response => {
      console.log(response, headers);
    });
  }
 
getBooks(): Observable<ApiResponse> {
  const header = new HttpHeaders().set('Authorization', this.tokenType + this.authService.getToken());
    const headers = { headers: header };
   return this.http.get<ApiResponse>(API_URL, headers);
   }
  
}

