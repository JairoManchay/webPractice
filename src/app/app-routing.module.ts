import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './shared/principal/principal.component';

const routes: Routes = [
  {
    path: 'perfil',
    loadChildren:()=>import ('./perfil/perfil.module').then(p=>p.PerfilModule)
  },
  {
    path: 'crudPrincipal',
    loadChildren:()=>import('./crud/crud.module').then(c=>c.CrudModule)
  },
  {
    path: '',
    component: PrincipalComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
