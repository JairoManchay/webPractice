import { Component } from '@angular/core';
import { RESTCountriesResponse, Info, Result } from '../../interface/user-ts';
import { ServiceApiService } from '../../services/service-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-multiple-perfiles',
  templateUrl: './multiple-perfiles.component.html',
  styleUrls: ['./multiple-perfiles.component.css']
})
export class MultiplePerfilesComponent {
  listArr:RESTCountriesResponse []|any;
  listadInfo: Info|any = [];
  listaResult: Result|any =[];

  constructor(private userApi: ServiceApiService){}

  ngOnInit(): void {


    this.userApi.getUsuariosMayor10().subscribe(
      (rep)=>{
        this.listArr = rep;
        this.listaResult = this.listArr?.results;
        this.listadInfo.push(this.listArr?.info);
        // console.log(Object.values(this.listArr))
      }
    )
  }


  mostrar(texto: any, alias: string): any{


    return Swal.fire(`${alias}: ${texto}`, 'Ya entendí', 'success');
  }



}
