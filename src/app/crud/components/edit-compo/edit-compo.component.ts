import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, filter, switchMap, tap } from 'rxjs';
import { UserServiceApi } from '../../service/user.service';
import { DataUser, Gender, Status } from '../../interface/user.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-components',
  templateUrl: './edit-compo.component.html',
  styleUrls: ['./edit-compo.component.css']
})
export class EditCompoComponent {

  constructor(private fb: FormBuilder,
              private activateRoute: ActivatedRoute,
              private userService: UserServiceApi,
              private router: Router ){}

  public myForm: FormGroup = this.fb.group({
    id: [''],
    name: ['', [Validators.required]],
    email: ['', [Validators.email]],
    gender: [Gender.male, [Validators.required]],
    status: [Status.active, [Validators.required]]
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

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      delay(2000),

      switchMap(
        ({id})=> this.userService.getUsersById(id)
      )
    )
    .subscribe(
      (usuarios)=>
      {
        this.myForm.reset(usuarios);
        return;
      }
    )
  }

    // variable para activación del mensaje de alerta
    mostrarMensaje: boolean = false;
    onSubmit(){
      if(this.myForm.invalid) return;
      this.userService.patchUser(this.currentUser)
      .subscribe(
        (user)=>{
          this.mensajePersonalizado(user?.id, 'ha sido Actualizado!');
          this.mostrarMensaje = true;
        }
      )
      return;
    }

  onDelete(){
    if(this.myForm.invalid) return;
    Swal.fire({
      title: '¿Estas seguro de Eliminarlo?',
      text: 'No serás capaz de recuperar este usuario',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, sé lo que hago',
      cancelButtonText: 'No, espera un momento'
    }).then((result)=>{
       if(result.value == true){
        Swal.fire(
          'Eliminado!',
          'Te regresaremos al inicio',
          'success',
        )
        this.userService.deleteUser(this.currentUser).subscribe(
          ()=> this.router.navigate(['/crudPrincipal/vistaC/'])
        )

       }else if(
        result.dismiss === Swal.DismissReason.cancel
       ){
        Swal.fire(
          'Cancelado',
          'Tu usuario esta aún con vida',
          'error'
        )
       }
    })
  }


  public texto: string = '';
  // mensajes personalizados
  mensajePersonalizado(id?: number|undefined, mensaje: string=''): string{
    if(id==0){
      this.texto = `El usuario ${mensaje} con éxito`;
    }
    if(!id) return this.texto = 'No se actualizó nada';
    this.texto  = `El usuario con el id: ${id}, ${mensaje} con éxito`;
    return this.texto;
  }
}
