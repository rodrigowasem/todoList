import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCreateTarefaComponent } from './btn-create-tarefa.component';

describe('BtnCreateTarefaComponent', () => {
  let component: BtnCreateTarefaComponent;
  let fixture: ComponentFixture<BtnCreateTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnCreateTarefaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCreateTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
