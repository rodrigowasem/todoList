import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-btn-delete-tarefa',
  templateUrl: './btn-delete-tarefa.component.html',
  styleUrls: ['./btn-delete-tarefa.component.css']
})
export class BtnDeleteTarefaComponent implements OnInit {

  @Input() tarefa!: Tarefa;
  @Output() tarefaDelete = new EventEmitter<any>();

  tarefaFormBsModalRef!: BsModalRef;

  tarefaForm = new FormGroup({
    titulo: new FormControl(),
    descricao: new FormControl(),
    data: new FormControl()
  });

  constructor(
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  openTarefaFormModal(template: TemplateRef<any>) {
    this.tarefaFormBsModalRef = this.bsModalService.show(template, {
      class: 'modal-xl modal-dialog-centered',
      ignoreBackdropClick: true,
      keyboard: false
    });
  }

  closeModalCardForm(): void {
    this.tarefaFormBsModalRef.hide();
  }

  deleteTarefa() {
    this.tarefaFormBsModalRef.hide();
    this.tarefaDelete.emit(this.tarefa);
  }


}
