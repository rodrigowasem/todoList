import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onCheckedConcluida(id: number) {
    this.tarefas.forEach((tarefa, i) => {
      if (tarefa.id == id) {
        this.tarefas[i].concluida = !this.tarefas[i].concluida;
      }
    });
  }

  onTarefaCreated(event: any) {
    if (event.titulo != null) {
      this.tarefas.push(event);
      this.tarefas.forEach((tarefa, i) => {
        tarefa.id = i + 1;
      });
    }
  }

  onTarefaEdit(event: any) {
    this.tarefas.forEach((tarefa, i) => {
      console.log(tarefa.id + "  " + event.id);
      if (tarefa.id == event.id) {
        this.tarefas[i].id = event.id;
        this.tarefas[i].titulo = event.titulo;
        this.tarefas[i].descricao = event.descricao;
        this.tarefas[i].concluida = event.concluida;
      }
    });
    console.log(this.tarefas);
  }

  onTarefaDelete(event: any) {
    this.tarefas.forEach((tarefa, i) => {
      if (tarefa.id == event.id) {
        this.tarefas.splice(i, 1);
      }
    });
  }
}
