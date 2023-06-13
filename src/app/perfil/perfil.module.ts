import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { PerfilEditComponent } from './pages/perfil-edit/perfil-edit.component';
import { PerfilRoutingModule } from './perfil-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuPerfilComponent } from './pages/menu-perfil/menu-perfil.component';
import { MultiplePerfilesComponent } from './pages/multiple-perfiles/multiple-perfiles.component';
import { CardSharedComponent } from './pages/card-shared/card-shared.component';



@NgModule({
  declarations: [
    ProfileComponent,
    PerfilEditComponent,
    MenuPerfilComponent,
    MultiplePerfilesComponent,
    CardSharedComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    FormsModule
  ]
})
export class PerfilModule { }
