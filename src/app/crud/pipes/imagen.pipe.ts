import { Pipe, PipeTransform } from "@angular/core";
import { DataUser } from "../interface/user.interface";

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: DataUser):string{
    if(value.gender==1){
      return 'assets/perfil_varon.webp';
    }else if(value.gender==0 || value.gender == 'female'){
      return 'assets/perfil_mujer.webp';
    }

    return 'assets/perfil_varon.webp';
  }

}
