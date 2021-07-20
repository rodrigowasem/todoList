import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-btn-create-tarefa',
  templateUrl: './btn-create-tarefa.component.html',
  styleUrls: ['./btn-create-tarefa.component.css']
})
export class BtnCreateTarefaComponent implements OnInit {

  tarefaForm!: FormGroup;
  tarefaFormBsModalRef!: BsModalRef;
  dateConfig: BsDatepickerConfig = new BsDatepickerConfig();

  @Output() tarefaCreated = new EventEmitter<any>();

  constructor(
    private bsModalService: BsModalService,
  ) { }

  ngOnInit(): void {
    this.tarefaForm = new FormGroup({
      titulo: new FormControl(null),
      descricao: new FormControl(null),
      concluida: new FormControl(false)
    });
    this.dateConfig.containerClass = "theme-dark-blue";
  }

  openTarefaFormModal(template: TemplateRef<any>) {
    this.tarefaFormBsModalRef = this.bsModalService.show(template, {
      class: 'modal-sl modal-dialog-centered',
      ignoreBackdropClick: true
    })
  }

  closeTarefaFormModal(): void {
    this.tarefaFormBsModalRef.hide();
  }

  createTarefa() {
    this.tarefaFormBsModalRef.hide();
    this.tarefaCreated.emit(this.tarefaForm.value);
    this.tarefaForm.reset();
  }
}
