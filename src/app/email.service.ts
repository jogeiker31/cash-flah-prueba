import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

constructor(
  private http:HttpClient
) { }

sendEmail(body){
  return this.http.post(`${environment.URL_API}/formulario/email`,body)
}

}
