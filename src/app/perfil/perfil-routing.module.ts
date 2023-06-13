import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { PerfilEditComponent } from './pages/perfil-edit/perfil-edit.component';
import { MenuPerfilComponent } from './pages/menu-perfil/menu-perfil.component';
import { MultiplePerfilesComponent } from './pages/multiple-perfiles/multiple-perfiles.component';



const routes: Routes=[
  {
    path: '',
    // Acá colocar mi componente principal, al momneto que deseen ver la interfaz del usuario
    component: MenuPerfilComponent,
    children:[
      {
        path:'edit/:id',
        component: PerfilEditComponent
      },
      {
        path: 'vista',
        component: ProfileComponent
      },
      {
        path: 'multiple',
        component: MultiplePerfilesComponent
      },
      {
        path: '**',
        redirectTo: 'vista'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
