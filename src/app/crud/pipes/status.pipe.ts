import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string):any{
    if(value=='inactive'){
      return value.toUpperCase();
    }else{
      return value.toUpperCase()
    }
  }

}
