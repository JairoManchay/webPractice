import { Component, Input } from '@angular/core';
import { Result, Info } from '../../interface/user-ts';

@Component({
  selector: 'app-card-shared',
  templateUrl: './card-shared.component.html',
  styleUrls: ['./card-shared.component.css']
})
export class CardSharedComponent {

  @Input() listaResult: Result|any=[];
  @Input() listadInfo: Info|any = [];

  result = ""
  mostrar(texto: any, alias: string): string{
    this.result= `My ${alias} is:  ` + texto;
    return this.result;
  }
}
