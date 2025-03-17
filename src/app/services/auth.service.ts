import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "http://localhost:9000/api/users/login";
  private apiUrls = "http://localhost:9000/api/users/register";
  constructor(private http: HttpClient) { }
  
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }
  register(user: { email: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrls, user);
  }
}
