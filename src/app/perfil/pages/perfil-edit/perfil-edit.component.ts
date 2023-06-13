import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceApiService } from '../../services/service-api.service';
import { Result, RESTCountriesResponse } from '../../interface/user-ts';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.component.html',
  styleUrls: ['./perfil-edit.component.css']
})
export class PerfilEditComponent {

  constructor(private route: ActivatedRoute, private _api: ServiceApiService){}

  resultado: Result[]=[];


  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id})=>
      this._api.getPorId(id)),
      tap(console.log)

    ).subscribe(
      datosId=>{
      setTimeout(()=>{
        {this.resultado = datosId.results
        console.log(this.resultado)}
      }, 1100)
      }
    )
  }


  respuesta: boolean = false;
  mostrarContrasena(){
    return this.respuesta=true;
  }

  ocultarContrasena(){
    return this.respuesta=false;
  }

}
