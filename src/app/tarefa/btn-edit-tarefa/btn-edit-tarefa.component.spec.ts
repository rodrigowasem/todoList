import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEditTarefaComponent } from './btn-edit-tarefa.component';

describe('BtnEditTarefaComponent', () => {
  let component: BtnEditTarefaComponent;
  let fixture: ComponentFixture<BtnEditTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnEditTarefaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnEditTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
