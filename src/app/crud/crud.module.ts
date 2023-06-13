import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostUserComponent } from './pages/post-user/post-user.component';
import { TraerUserComponent } from './pages/traer-user/traer-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { StatusPipe } from './pipes/status.pipe';
import { HeaderComponent } from './components/header/header.component';
import { CardGetComponent } from './components/card-get/card-get.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { CardModalComponent } from './components/modal/card-modal.component';
import { EditCompoComponent } from './components/edit-compo/edit-compo.component';


@NgModule({
  declarations: [
    TraerUserComponent,
    PostUserComponent,
    EditUserComponent,
    StatusPipe,
    ImagenPipe,
    HeaderComponent,
    CardGetComponent,
    CardModalComponent,
    EditCompoComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ReactiveFormsModule,
    
    FormsModule
  ]
})
export class CrudModule { }
