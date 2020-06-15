import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService} from './shared';
import { ListarComponent } from './listar'
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { CadastrarComponent } from './cadastrar/cadastrar.component';

@NgModule({
  declarations: [ListarComponent, CadastrarComponent],
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
