import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { BtnCreateTarefaComponent } from './tarefa/btn-create-tarefa/btn-create-tarefa.component';
import { BtnDeleteTarefaComponent } from './tarefa/btn-delete-tarefa/btn-delete-tarefa.component';
import { BtnEditTarefaComponent } from './tarefa/btn-edit-tarefa/btn-edit-tarefa.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TarefaComponent,
    BtnCreateTarefaComponent,
    BtnDeleteTarefaComponent,
    BtnEditTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
