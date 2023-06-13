import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent {


  @Input()
  public tipo_user: string= '';

  mostrarModal: boolean=false;

  ngOnInit(): void {
    setTimeout(()=>{
      this.mostrarModal = true;
    }, 3000)
    this.mostrarModal = false;
  }
}
