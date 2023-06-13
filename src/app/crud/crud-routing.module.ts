import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraerUserComponent } from './pages/traer-user/traer-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { PostUserComponent } from './pages/post-user/post-user.component';


const routes: Routes = [
  {
    path: '',
    children:[
      {path: 'vistaC', component: TraerUserComponent},
      {path: 'editarC/:id', component: EditUserComponent},
      {path: 'crearC', component: PostUserComponent},
      {path:'**', redirectTo: 'vistaC'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
