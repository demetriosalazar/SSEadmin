import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespAuth, usuario } from '../interfaces';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "http://10.1.41.13:3000/api/";

  usuario: usuario ={
    username : "",
    password : ""
  }

  autentificar(body :any){

    // this.usuario.username=usu;
    // this.usuario.password=contra;

    // let json = JSON.stringify(this.usuario);

    console.log(body);
    const url=`${this.apiUrl}auth/login`;

    return this.http.post<RespAuth>(url,body)
  

  }

}
