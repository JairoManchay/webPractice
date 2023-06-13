import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { RESTCountriesResponse, Result } from '../interface/user-ts';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(private http: HttpClient) { }

  //https://randomuser.me/api?results=10    |    https://randomuser.me/api
  urlUsuario = 'https://randomuser.me/api'

  // Api para el filtrado por id
  // https://randomuser.me/api/?seed=97eb5f53b2e75fca


  getUsuariosApi():Observable<RESTCountriesResponse[]>{
    return this.http.get<RESTCountriesResponse[]>(this.urlUsuario);
  }

  getPorId(id: string):Observable<Result>{
    return this.http.get<Result>(`${this.urlUsuario}/?seed=${id}`);
  }

  getUsuariosMayor10():Observable<RESTCountriesResponse[]>{
    const urlMultiple = "https://randomuser.me/api/?results=10";
    return this.http.get<RESTCountriesResponse[]>(urlMultiple);
  }

}

