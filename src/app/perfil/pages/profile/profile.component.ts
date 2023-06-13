import { Component } from '@angular/core';
import { ServiceApiService } from '../../services/service-api.service';
import { Result, RESTCountriesResponse, Info } from '../../interface/user-ts';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  // atrapando datos de un array
  listArr:RESTCountriesResponse []|any;
  listadInfo: Info|any = [];
  listaResult: Result|any =[];

  constructor(private userApi: ServiceApiService){}

  ngOnInit(): void {


    this.userApi.getUsuariosApi().subscribe(
      (rep)=>{
        this.listArr = rep;
        this.listaResult = this.listArr?.results;
        this.listadInfo.push(this.listArr?.info);
        // console.log(Object.values(this.listArr))
      }
    )
  }




}
