import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-btn-edit-tarefa',
  templateUrl: './btn-edit-tarefa.component.html',
  styleUrls: ['./btn-edit-tarefa.component.css']
})
export class BtnEditTarefaComponent implements OnInit {

  @Input() tarefa!: Tarefa;
  @Output() tarefaEdit = new EventEmitter<any>();

  tarefaForm = new FormGroup({
    id: new FormControl(),
    concluida: new FormControl(),
    titulo: new FormControl(),
    descricao: new FormControl(),
  });

  tarefaFormBsModalRef!: BsModalRef;
  titulo!: string;
  descricao!: string;
  id!: number;
  concluida!: boolean;

  constructor(
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {

  }

  openTarefaFormModal(template: TemplateRef<any>) {
    this.tarefaFormBsModalRef = this.bsModalService.show(template, {
      class: 'modal-sl modal-dialog-centered',
      ignoreBackdropClick: true
    })

    this.tarefaForm.get('id')?.setValue(this.tarefa.id);
    this.tarefaForm.get('concluida')?.setValue(this.tarefa.concluida);
    this.titulo = this.tarefa.titulo;
    this.descricao = this.tarefa.descricao;
  }

  closeTarefaFormModal(): void {
    this.tarefaFormBsModalRef.hide();
  }

  editTarefa() {
    this.tarefaFormBsModalRef.hide();
    console.log(this.tarefaForm.value);
    this.tarefaEdit.emit(this.tarefaForm.value);
  }
}
