import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService} from './shared';
import { ListarComponent } from './listar'
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { CadastrarComponent } from './cadastrar';
import { EditarComponent } from './editar';

@NgModule({
  declarations: [ListarComponent, CadastrarComponent, EditarComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
