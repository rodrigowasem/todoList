import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDeleteTarefaComponent } from './btn-delete-tarefa.component';

describe('BtnDeleteTarefaComponent', () => {
  let component: BtnDeleteTarefaComponent;
  let fixture: ComponentFixture<BtnDeleteTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDeleteTarefaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDeleteTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
