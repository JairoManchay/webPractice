import { Component, Input } from '@angular/core';
import { DataUser, Gender, Status } from '../../interface/user.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { UserServiceApi } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-card-share',
  templateUrl: './card-get.component.html',
  styleUrls: ['./card-get.component.css']
})
export class CardGetComponent {

  constructor(
    private sanitizer: DomSanitizer,
    private serviceHelp: UserServiceApi,
    private fb: FormBuilder
    ) {}

  // Creando variable para confirmar la creacion
  creado: boolean = false;


  public myForm: FormGroup = this.fb.group({
    id: [''],
    name: ['', [Validators.required]],
    email: ['', [Validators.email]],
    gender: [Gender.male, [Validators.required]],
    status: [Status.active, [Validators.required]],
    alt_img: ['', Validators.required]
  })


  public genderChoose=[
    {id: 0, value: 'female'},
    {id: 1, value: 'male'}
  ]

  public statusChoose=[
    {id: 0, value: 'active'},
    {id: 1, value: 'inactive'}
  ]

  get currentUser(): DataUser{
    const usuarios = this.myForm.value as DataUser;
    return usuarios;
  }

  get userImg(): any{
    const img = this.myForm.controls['alt_img'].value as string;
    return img;
  }

  cargarDatos() {
    if(this.myForm.invalid) return;
    console.log(this.currentUser);
      this.serviceHelp.postUser(this.currentUser).pipe(
        delay(2000)
        )
        .subscribe(
            (rep)=>{
              console.log("Agregado -> " + rep);
            }
        )
      this.creado = true;
  }


  base64: string = 'base64...';
  // Vizualizando la imagen
  previsualizacion: any;
  fileSelected!: Blob;
  archivosCap: any;

  // probando funcion de file
  capturarImagen(event: any): any{
    this.fileSelected = event?.target.files[0];
    this.previsualizacion = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(
      this.fileSelected
    )) as string;
    this.convertFileToBase64();

  }


  // metodo base64
  convertFileToBase64(){
    let reader = new FileReader();
    reader.readAsDataURL(this.fileSelected as Blob);
    reader.onloadend=()=>{
      this.base64 = reader.result as string
      this.userImg!= this.base64;
    }
  }


  ngOnInit(): void {

  }
}
