import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
private baseURL="http://localhost:8080";
  constructor(private http: HttpClient) { }


  sendEmail(emailMessage: any) {
    return this.http.post('http://localhost:8080/sendEmail', emailMessage);
  }
   


}
