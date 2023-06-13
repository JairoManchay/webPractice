import { Injectable } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";
import { DataUser } from "../interface/user.interface";
import { HttpClient } from "@angular/common/http";
import { Http_Headers } from './headers/headers';



@Injectable({
  providedIn: 'root'
})
export class UserServiceApi {

  //https://gorest.co.in/public/v2/users
  url: string = 'https://gorest.co.in/';

  // obtener un limite de usuarios
  params:string ='per_page';

  constructor(private http: HttpClient){}

  getUsers(limit: number): Observable<DataUser[]>{
    return this.http.get<DataUser[]>(this.url + `public/v2/users?${this.params}=${limit}`);
  }

  postUser(Dato: DataUser):Observable<DataUser>{
    return this.http.post<DataUser>(this.url+'public/v2/users', Dato,
    {
      headers: Http_Headers,

    });
  }


  getUsersById(userId: string):Observable<DataUser | undefined>{
    return this.http.get<DataUser>(this.url + `public/v2/users/${userId}`).pipe(
      catchError(()=>of(undefined))
    )
  }

  patchUser(users: DataUser):Observable<DataUser | null>{
    console.log(users.id)
    if(!users.id) throw Error('the id is required!');
    return this.http.patch<DataUser>(this.url + `public/v2/users/${users.id}`, users,
    {
      headers: Http_Headers
    }).pipe(
      catchError(()=>of(null))
    )
  }

  deleteUser(user: DataUser | undefined): Observable<string | null>{
    if(user?.id===undefined) throw Error('the Id is required!');
    return this.http.delete<string>(this.url + `/public/v2/users/${user.id}`, {
      headers: Http_Headers
    })
    .pipe(
      catchError(()=>of(null))
    )
  }

}
